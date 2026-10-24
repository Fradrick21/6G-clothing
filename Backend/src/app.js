const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const User = require('./models/User');
const { Contact, Subscriber } = require('./models/Submission');
const products = require('./data/products.json');
const { requireAuth, publicUser, cookieOptions } = require('./middleware/auth');
const { fail, text, email } = require('./validation');
const app = express();
app.disable('x-powered-by');
const origins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173').split(',').map((v) => v.trim());
app.use(cors({ origin: origins, credentials: true }));
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff');
  if (!['GET', 'HEAD', 'OPTIONS'].includes(req.method) && req.headers.origin && !origins.includes(req.headers.origin)) {
    return res.status(403).json({ message: 'Origin is not allowed' });
  }
  next();
});
app.use(express.json({ limit: '64kb' }));
app.use((req, res, next) => {
  if (req.body === undefined) req.body = {};
  if (req.body === null || Array.isArray(req.body) || typeof req.body !== 'object') {
    return res.status(400).json({ message: 'Expected a JSON object' });
  }
  next();
});
// Bounded, per-process throttling for public write endpoints.
const attempts = new Map();
function throttle(req, res, next) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
  const key = `${req.ip}:${req.path}`;
  const value = attempts.get(key) || { count: 0, until: now + 15 * 60000 };
  if (++value.count > 50) return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  attempts.set(key, value);
  next();
}
app.get(['/', '/api/health'], (req, res) => {
  const ready = mongoose.connection.readyState === 1;
  res.status(ready ? 200 : 503).json({ success: ready, database: ready ? 'connected' : 'disconnected', databaseName: ready ? mongoose.connection.name : null });
});
app.use('/api/auth', (req, res, next) => { res.set('Cache-Control', 'no-store'); next(); }, throttle, require('./routes/authRoutes'));
app.get('/api/auth/me', requireAuth, (req, res) => res.json({ user: publicUser(req.user) }));
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('sixg_session', cookieOptions());
  res.json({ success: true });
});
app.get('/api/products', (req, res) => res.json({ products }));
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ product });
});
app.post('/api/contact', throttle, async (req, res) => {
  await Contact.create({ name: text(req.body.name, 'Name', 100), email: email(req.body.email), subject: text(req.body.subject, 'Subject', 100), message: text(req.body.message, 'Message', 5000) });
  res.status(201).json({ success: true, message: 'Your message has been received.' });
});
app.post('/api/newsletter', throttle, async (req, res) => {
  await Subscriber.updateOne({ email: email(req.body.email) }, { $setOnInsert: { email: email(req.body.email) } }, { upsert: true });
  res.json({ success: true, message: 'Thanks for joining the 6G community.' });
});
const account = express.Router();
account.use(requireAuth, (req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
const state = (u) => ({ profile: publicUser(u), cart: u.cart, wishlist: u.wishlist, addresses: u.addresses, orders: u.orders });
account.get('/', (req, res) => res.json(state(req.user)));
account.patch('/profile', async (req, res) => {
  const profile = { name: text(req.body.name, 'Name', 100), email: email(req.body.email), phone: req.body.phone || '' };
  if (typeof profile.phone !== 'string' || (profile.phone && !/^\d{10}$/.test(profile.phone))) fail('Phone must contain 10 digits');
  const user = await User.findByIdAndUpdate(req.user._id, { $set: profile, $inc: { __v: 1 } }, { returnDocument: 'after', runValidators: true });
  res.json({ profile: publicUser(user) });
});
function list(value, max) {
  if (!Array.isArray(value) || value.length > max) fail(`Expected a list of at most ${max} items`);
  return value;
}
function validCart(value) {
  const seen = new Set();
  return list(value, 100).map((item) => {
    if (!item || typeof item !== 'object') fail('Invalid cart item');
    const p = products.find((p) => p.id === item.id);
    if (!p || !p.inStock || !p.sizes.includes(item.size) || !p.colors.includes(item.color)) fail('Product or variant unavailable');
    if (!Number.isInteger(item.qty) || item.qty < 1 || item.qty > 99) fail('Quantity must be between 1 and 99');
    const key = `${p.id}:${item.size}:${item.color}`;
    if (seen.has(key)) fail('Duplicate cart variant');
    seen.add(key);
    return { id: p.id, size: item.size, color: item.color, qty: item.qty, selected: item.selected !== false };
  });
}
function validAddresses(value) {
  const seen = new Set();
  const result = list(value, 20).map((a) => {
    if (!a || typeof a !== 'object') fail('Invalid address');
    const address = {};
    for (const key of ['id', 'name', 'phone', 'line1', 'city', 'state', 'pincode']) address[key] = text(a[key], key, 200);
    if (!/^[a-zA-Z0-9_-]+$/.test(address.id) || seen.has(address.id)) fail('Invalid or duplicate address ID');
    seen.add(address.id);
    if (!/^\d{10}$/.test(address.phone) || !/^\d{6}$/.test(address.pincode)) fail('Invalid phone or pincode');
    address.line2 = a.line2 ? text(a.line2, 'Address line 2', 200) : '';
    address.type = ['Home', 'Work', 'Other'].includes(a.type) ? a.type : 'Home';
    address.isDefault = a.isDefault === true;
    return address;
  });
  const defaultIndex = Math.max(0, result.findIndex((a) => a.isDefault));
  return result.map((a, i) => ({ ...a, isDefault: i === defaultIndex }));
}
for (const field of ['cart', 'wishlist', 'addresses']) {
  account.put(`/${field}`, async (req, res) => {
    let value = req.body[field];
    if (field === 'cart') value = validCart(value);
    if (field === 'addresses') value = validAddresses(value);
    if (field === 'wishlist') value = [...new Set(list(value, 100).map((id) => {
      if (!products.some((p) => p.id === id)) fail('Unknown wishlist product');
      return id;
    }))];
    await User.updateOne({ _id: req.user._id }, { $set: { [field]: value }, $inc: { __v: 1 } });
    res.json({ [field]: value });
  });
}
account.get('/orders', (req, res) => res.json({ orders: req.user.orders }));
account.post('/orders', async (req, res) => {
  const rows = validCart(req.user.cart).filter((item) => item.selected);
  if (!rows.length) fail('Select at least one cart item');
  const address = req.user.addresses.find((a) => a.isDefault) || req.user.addresses[0];
  if (!address) fail('Add a shipping address in your account before placing an order');
  const subtotal = rows.reduce((sum, item) => sum + products.find((p) => p.id === item.id).price * item.qty, 0);
  const discount = subtotal >= 1800 ? 200 : subtotal >= 1200 ? 100 : 0;
  const shipping = subtotal - discount >= 999 ? 0 : 79;
  const order = {
    id: `6G-${randomUUID()}`, date: new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', day: '2-digit', month: 'short', year: 'numeric' }),
    createdAt: new Date().toISOString(), items: rows.reduce((sum, item) => sum + item.qty, 0),
    sizes: [...new Set(rows.map((item) => `Size: ${item.size}`))].join(', '), status: 'Processing',
    paymentMethod: 'COD', paymentStatus: 'Unpaid', address, subtotal, discount, shipping, total: subtotal - discount + shipping,
    lines: rows.map((item) => { const p = products.find((p) => p.id === item.id); return { ...item, name: p.name, price: p.price }; }),
  };
  // One atomic update prevents double checkout and preserves unselected items.
  const user = await User.findOneAndUpdate({ _id: req.user._id, __v: req.user.__v }, {
    $set: { cart: req.user.cart.filter((item) => item.selected === false) },
    $push: { orders: { $each: [order], $position: 0 } }, $inc: { __v: 1 },
  }, { returnDocument: 'after' });
  if (!user) return res.status(409).json({ message: 'Your cart changed. Refresh and try again.' });
  res.status(201).json({ order, cart: user.cart, orders: user.orders });
});
app.use('/api/account', account);
app.use('/api', (req, res) => res.status(404).json({ message: 'API endpoint not found' }));
if (process.env.SERVE_FRONTEND === 'true') {
  const dist = path.resolve(__dirname, '../../Frontend/dist');
  app.use(express.static(dist));
  app.get('/{*path}', (req, res) => res.sendFile(path.join(dist, 'index.html')));
}
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  const status = error.code === 11000 ? 409 : error.status || (error.name === 'ValidationError' ? 400 : 500);
  if (status >= 500) console.error(error);
  res.status(status).json({ success: false, message: error.code === 11000 ? 'This email is already registered' : status >= 500 ? 'Server error. Please try again.' : error.message });
});
module.exports = app;

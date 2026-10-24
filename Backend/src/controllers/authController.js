const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { session, publicUser, cookieOptions } = require('../middleware/auth');
const { text, email, fail } = require('../validation');
async function registerUser(req, res) {
  const name = text(req.body.name, 'Name', 100);
  const address = email(req.body.email);
  const password = text(req.body.password, 'Password', 128, false);
  if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
    fail('Password needs at least 8 characters, an uppercase letter, a number and a special character');
  }
  const user = await User.create({ name, email: address, password: await bcrypt.hash(password, 12) });
  res.clearCookie('sixg_session', cookieOptions());
  res.status(201).json({
    success: true,
    message: 'Account created. Please log in to continue.',
    loginRequired: true,
    user: publicUser(user),
  });
}
async function loginUser(req, res) {
  const address = email(req.body.email);
  const password = text(req.body.password, 'Password', 128, false);
  const user = await User.findOne({ email: address });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  res.json({ success: true, user: session(res, user, req.body.remember === 'on' || req.body.remember === true) });
}
module.exports = { registerUser, loginUser };

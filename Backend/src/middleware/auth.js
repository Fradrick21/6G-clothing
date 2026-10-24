const jwt = require('jsonwebtoken');
const User = require('../models/User');

const cookieOptions = () => ({ httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/' });
const publicUser = (user) => ({ id: String(user._id), name: user.name, email: user.email, phone: user.phone || '', role: user.role });
function session(res, user, remember = false) {
  const token = jwt.sign({ userId: String(user._id), purpose: 'login' }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
  res.cookie('sixg_session', token, { ...cookieOptions(), ...(remember ? { maxAge: 7 * 86400000 } : {}) });
  return publicUser(user);
}
async function requireAuth(req, res, next) {
  try {
    const cookies = Object.fromEntries((req.headers.cookie || '').split(';').filter(Boolean).map((v) => {
      const index = v.indexOf('=');
      return [v.slice(0, index).trim(), v.slice(index + 1)];
    }));
    const token = req.headers.authorization?.replace(/^Bearer /, '') || cookies.sixg_session;
    const payload = jwt.verify(token || '', process.env.JWT_SECRET);
    if (payload.purpose !== 'login') return res.status(401).json({ message: 'Please log in to access your account' });
    req.user = await User.findById(payload.userId);
    if (!req.user) return res.status(401).json({ message: 'Please sign in again' });
    next();
  } catch (error) {
    if (['JsonWebTokenError', 'TokenExpiredError', 'CastError'].includes(error.name)) {
      return res.status(401).json({ message: 'Please sign in again' });
    }
    next(error);
  }
}
module.exports = { requireAuth, session, publicUser, cookieOptions };

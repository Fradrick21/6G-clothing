const mongoose = require('mongoose');
const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: String, email: String, subject: String, message: String,
}, { timestamps: true }));
const Subscriber = mongoose.model('Subscriber', new mongoose.Schema({
  email: { type: String, unique: true, required: true },
}, { timestamps: true }));
module.exports = { Contact, Subscriber };

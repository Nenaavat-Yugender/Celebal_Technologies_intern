const mongoose = require('mongoose');

// Basic user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

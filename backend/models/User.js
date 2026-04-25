const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  year: String,
  goal: String,
  phone: Number,
  email: { type: String, unique: true, required: true },
  streak: { type: Number, default: 0 },
  created_at: { type: String, default: () => new Date().toISOString().split('T')[0] }
});

module.exports = mongoose.model("User", userSchema);
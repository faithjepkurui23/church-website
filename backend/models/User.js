const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  avatar: { type: String, required: true }, // avatar URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: String, required: true },
  aadharcard: { type: String, required: true, max: 12 },
  email: { type: String, required: true },
});

module.exports = mongoose.model("users", userSchema);

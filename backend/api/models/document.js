const mongoose = require("mongoose");

const docSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fileName: {type: String, required: true},
  hashrc: { type: String },
  hashpuc: { type: String },
  hashinsurance: { type: String },
  email: { type: String, required: true }
});

module.exports = mongoose.model("users", userSchema);
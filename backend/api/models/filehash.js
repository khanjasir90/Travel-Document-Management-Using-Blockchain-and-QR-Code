const mongoose = require("mongoose");

const filehashSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  filehashrc: String,
  filehashpuc: { type: String },
  filehashinsurance: { type: String },
  email: { type: String, required: true },
});

module.exports = mongoose.model("filehashes", filehashSchema);

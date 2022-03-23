const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  vehicle_no: String,
  lost: { type: Boolean, default: true },
});

module.exports = mongoose.model("vehicles", vehicleSchema);

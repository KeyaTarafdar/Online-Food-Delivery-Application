const mongoose = require("mongoose");

const deliveryBoySchema = mongoose.Schema({
  username: String,
  contact: Number,
  address: String,
});

module.exports = mongoose.model("deliveryBoy", deliveryBoySchema);

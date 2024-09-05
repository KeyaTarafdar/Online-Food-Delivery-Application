// *deliveryBoy-model.js*
const mongoose = require("mongoose");

const deliveryBoySchema = mongoose.Schema({
  username: String,
  contact: Number,
  address: String,
  deliveryOrder: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
});

module.exports = mongoose.model("deliveryBoy", deliveryBoySchema);

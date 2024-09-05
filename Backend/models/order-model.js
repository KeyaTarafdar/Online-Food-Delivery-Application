// *order-model.js*
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  foodId: [{ type: mongoose.Schema.Types.ObjectId, ref: "food" }],
  time: { type: String, require: true },
  totalAmount: Number,
  orderAddress: String,
  phone: Number,
  deliverStatus: { type: String, default: "Pending" },
  isDeleted: { type: Boolean, default: false },
  // paymentId: String,
});

module.exports = mongoose.model("order", orderSchema);

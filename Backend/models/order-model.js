// *order-model.js*
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  foodId: [{ type: mongoose.Schema.Types.ObjectId, ref: "food" }],
  time: { type: Date, require: true },
  // paymentId: String,
});

module.exports = mongoose.model("order", orderSchema);

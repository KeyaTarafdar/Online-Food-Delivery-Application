// *food-model.js*
const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  category: String,
  quantity: String,
  restaurent: String,
  isInCart: { type: Boolean, default: false },
});

module.exports = mongoose.model("food", foodSchema);

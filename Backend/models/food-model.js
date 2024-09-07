// *food-model.js*
const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  category: String,
  restaurent: String,
});

module.exports = mongoose.model("food", foodSchema);

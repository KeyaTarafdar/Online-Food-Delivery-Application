const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("food", foodSchema);

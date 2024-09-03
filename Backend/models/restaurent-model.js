const mongoose = require("mongoose");

const restaurentSchema = mongoose.Schema({
  image: String,
  name: String,
  address: String,
  food: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("restaurent", restaurentSchema);

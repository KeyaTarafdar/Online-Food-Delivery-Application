const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  image: String,
  products: {
    type: Array,
    default: [],
  },
  gstin: String,
});

module.exports = mongoose.model("admin", adminSchema);

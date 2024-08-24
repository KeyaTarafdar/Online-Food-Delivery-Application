const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
// const config = require("config");
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose
  // .connect(`${config.get("MONGODB_URI")}/food_delivery`)
  .connect(`${mongoUri}/food_delivery`)
  .then(() => {
    dbgr("Connected");
  })
  .catch((err) => {
    dbgr(err);
  });

module.exports = mongoose.connection;

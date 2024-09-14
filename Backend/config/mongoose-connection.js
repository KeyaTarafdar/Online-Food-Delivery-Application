const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(`${mongoUri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Optional: adjust based on your needs
  })
  .then(() => {
    dbgr("Connected");
  })
  .catch((err) => {
    dbgr(err.message);
  });

module.exports = mongoose.connection;

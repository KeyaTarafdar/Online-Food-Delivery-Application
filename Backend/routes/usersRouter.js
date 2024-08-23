const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/authController");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  res.send("User");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", isLoggedIn, logoutUser);

router.get("/getdata", async (req, res) => {
  let user = await userModel.findOne({ email: "keya@gmail.com" });
  console.log(user.username)
  res.send(user);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controller/authController");

router.get("/", (req, res) => {
  res.send("User");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", isLoggedIn, logoutUser);

router.get("/getuser", isLoggedIn, getUser);

module.exports = router;

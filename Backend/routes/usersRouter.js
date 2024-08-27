const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
} = require("../controller/authController");

router.get("/", (req, res) => {
  res.send("User");
});

// USER REGISTER
router.post("/register", registerUser);

// USER LOGIN
router.post("/login", loginUser);

// USER LOGOUT
router.get("/logout", isLoggedIn, logoutUser);

// GET SINGLE USER
router.get("/getuser", isLoggedIn, getUser);

// UPDATE USER DETAILS
router.put("/updateuser", isLoggedIn, updateUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  createAdmin,
  loginAdmin,
  createCompanyDetails,
  logoutAdmin,
} = require("../controller/adminController");

// ADMIN REGISTER
if (process.env.NODE_ENV === "development") {
  router.post("/create", createAdmin);
}

router.get("/", (req, res) => {
  res.send("Admin");
});

// ADMIN LOGIN
router.post("/login", loginAdmin);

// ADMIN LOGOUT
router.post("/logout",isLoggedIn, logoutAdmin);

// ADD COMPANY DETAILS
router.post("/createcompanydetails", isLoggedIn, createCompanyDetails);

module.exports = router;

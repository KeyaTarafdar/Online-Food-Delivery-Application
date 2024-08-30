const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  createAdmin,
  loginAdmin,
  createCompanyDetails,
  logoutAdmin,
  getAdmin,
  updateCompanyName,
  updateCompanyPhone,
  updateCompanyEmail,
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
router.post("/logout", isLoggedIn, logoutAdmin);

// ADD COMPANY DETAILS
router.post("/createcompanydetails", isLoggedIn, createCompanyDetails);

// UPDATE COMPANY Name
router.put("/updatecompanyname", isLoggedIn, updateCompanyName);

// UPDATE COMPANY PHONE
router.put("/updatecompanyphone", isLoggedIn, updateCompanyPhone);

// UPDATE COMPANY EMAIL
router.put("/updatecompanyemail", isLoggedIn, updateCompanyEmail);

// FETCH ADMIN DETAILS
router.get("/getadmin", isLoggedIn, getAdmin);

module.exports = router;

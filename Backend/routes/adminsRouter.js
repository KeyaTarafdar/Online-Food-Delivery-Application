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
  getDeliveryBoy,
  createDeliveryBoy,
  getAllUsers,
  deleteDeliveryBoy,
  uploadProfilePicture,
  addNewRestaurent,
  fetchAllRestaurent,
  deleteRestaurent,
  fetchSingleRestaurent,
} = require("../controller/adminController");
const {
  uploadAdminProfile,
  uploadRestaurent,
} = require("../middlewares/multer");

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

// UPDATE COMPANY NAME
router.put("/updatecompanyname", isLoggedIn, updateCompanyName);

// UPDATE COMPANY PHONE
router.put("/updatecompanyphone", isLoggedIn, updateCompanyPhone);

// UPDATE COMPANY EMAIL
router.put("/updatecompanyemail", isLoggedIn, updateCompanyEmail);

// FETCH ADMIN DETAILS
router.get("/getadmin", isLoggedIn, getAdmin);

// CREATE DELIVERY BOY
router.post("/createdeliveryboy", isLoggedIn, createDeliveryBoy);

// GET DELIVERY BOY
router.get("/getdeliveryboy", isLoggedIn, getDeliveryBoy);

// DELETE DELIVERY BOY
router.delete("/deletedeliveryboy", isLoggedIn, deleteDeliveryBoy);

// GET ALL USERS
router.get("/getallusers", isLoggedIn, getAllUsers);

// UPLOAD PROFILE PICTURE
router.post(
  "/uploadprofilepicture",
  isLoggedIn,
  uploadAdminProfile.single("image"),
  uploadProfilePicture
);

// ADD NEW RESTAURENT
router.post(
  "/addnewrestaurent",
  isLoggedIn,
  uploadRestaurent.single("image"),
  addNewRestaurent
);

// FETCH ALL RESTAURENT
router.get("/fetchallrestaurent", isLoggedIn, fetchAllRestaurent);

// FETCH A PARTICULAR RESTAURENT
router.get("/fetchsinglerestaurent", isLoggedIn, fetchSingleRestaurent);

// DELETE SINGLE RESTAURENT
router.delete("/deleterestaurent", isLoggedIn, deleteRestaurent);

module.exports = router;

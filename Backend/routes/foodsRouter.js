const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const { uploadFoodItem } = require("../middlewares/multer");
const { createFoodItems } = require("../controller/foodController");

router.get("/", (req, res) => {
  res.send("Food");
});

// UPLOAD FOOD ITEM PICTURE
router.post("/createfooditem", isLoggedIn, uploadFoodItem.single("image"), createFoodItems);

module.exports = router;

const multer = require("multer");
const path = require("path");

// User Profile Picture Upload
const storageUserProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Frontend/public/userProfilePictures");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});
module.exports.uploadUserProfile = multer({ storage: storageUserProfile });

// Admin Profile Picture Upload
const storageAdminProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Frontend/public/adminProfilePictures");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});
module.exports.uploadAdminProfile = multer({ storage: storageAdminProfile });

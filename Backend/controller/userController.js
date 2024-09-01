const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const dbgr = require("debug")("development:usercheck");
const fs = require("fs");

// Register User
module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, username, contact } = req.body;

    if (email && password && username && contact) {
      // Checks all fielda are given or not
      if (await userModel.findOne({ email })) {
        // Checks the user is already exists or not
        return res.send("User already exists. Please Login");
      }

      bcrypt.genSalt(12, async (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            return res.send(err.message);
          }
          let user = await userModel.create({
            email,
            password: hash,
            username,
            contact,
          });

          let token = generateToken(user);
          res.cookie("token", token, {
            httpOnly: true, // Cookie is only accessible by the web server
            secure: false, // Set to true if using HTTPS
            sameSite: "Lax", // Controls whether cookies are sent with cross-site requests
          });
          dbgr("Cookie sent");

          res.send("User created successfully");
        });
      });
    } else {
      res.send("Something is missing");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Login
module.exports.loginUser = async (req, res) => {
  try {
    let token = req.cookies.token;
    if (token) {
      res.send("You are already logged in.");
    } else {
      let { email, password } = req.body;

      if (email && password) {
        let user = await userModel.findOne({ email });

        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
              let token = generateToken(user);
              res.cookie("token", token, {
                httpOnly: true, // Cookie is only accessible by the web server
                secure: false, // Set to true if using HTTPS
                sameSite: "Lax", // Controls whether cookies are sent with cross-site requests
              });
              res.send("Login successfully");
            } else {
              res.send("Wrong Password");
            }
          });
        } else {
          return res.send("Email or Password is wrong");
        }
      } else {
        return res.send("Something is missing");
      }
    }
  } catch (err) {
    return res.status(501).send("Something went wrong");
  }
};

// Logout
module.exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", "");
    res.send("Logout successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Get Single User
module.exports.getUser = async (req, res) => {
  try {
    if (req.user) {
      let user = await userModel.findOne({ email: req.user.email });
      res.send(user);
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Update User Details
module.exports.updateUser = async (req, res) => {
  try {
    let { username, contact, email, address } = req.body;
    let user = req.user;
    await userModel.updateOne(
      { email: user.email },
      { $set: { username, contact, email, address } }
    );
    res.send("Updated successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Upload Profile Picture
module.exports.uploadProfilePicture = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const oldImage = req.user.image;
    await userModel.updateOne(
      { email: req.user.email },
      { $set: { image: req.file.filename } }
    );
    if (oldImage)
      fs.unlink(`../Frontend/public/userProfilePictures/${oldImage}`, (err) => {
        if (err) {
          console.log(err.message);
        }
      });
    res.send("File uploaded successfully.");
  } catch (err) {
    res.send(err.message);
  }
};

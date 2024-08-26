const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const adminModel = require("../models/admin-model");

// ADMIN REGISTER
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let admins = await adminModel.find();
    if (admins.length > 0) {
      return res
        .status(504)
        .send("You don't have permission to create a new admin");
    }

    let { username, email, password } = req.body;

    if (username && email && password) {
      bcrypt.genSalt(12, async (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            return res.send(err.message);
          }
          await adminModel.create({
            username,
            email,
            password: hash,
          });
          res.send("Admin created successfully");
        });
      });
    } else {
      res.send("Something is missing");
    }
  });
}

router.get("/", (req, res) => {
  res.send("Admin");
});

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    let token = req.cookies.token;
    if (token) {
      res.send("You are already logged in.");
    } else {
      let { email, password } = req.body;

      if (email && password) {
        let admin = await adminModel.findOne({ email });

        if (admin) {
          bcrypt.compare(password, admin.password, (err, result) => {
            if (result) {
              let token = generateToken(admin);
              res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "Lax",
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
});
module.exports = router;

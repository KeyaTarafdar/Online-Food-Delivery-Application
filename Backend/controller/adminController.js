const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const dbgr = require("debug")("development:usercheck");
const adminModel = require("../models/admin-model");
const companyDetailModel = require("../models/companyDetails-model");

// CREATE ADMIN
module.exports.createAdmin = async (req, res) => {
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
};

module.exports.loginAdmin = async (req, res) => {
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
};

module.exports.logoutAdmin = async (req, res) => {
  try {
    res.cookie("token", "");
    res.send("Logout successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

module.exports.createCompanyDetails = async (req, res) => {
  try {
    let { name, phone, email, fbLink, instaLink } = req.body;

    if (name && phone && email && fbLink && instaLink) {
      await companyDetailModel.create({
        name,
        phone,
        email,
        fbLink,
        instaLink,
      });
    } else {
      res.send("Something is missing");
    }

    res.send("Company details added successfully");
  } catch (err) {
    console.log(err.message);
    res.send("Something went wrong");
  }
};

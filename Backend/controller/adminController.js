const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const dbgr = require("debug")("development:usercheck");
const adminModel = require("../models/admin-model");
const companyDetailModel = require("../models/companyDetails-model");
const deliveryBoyModel = require("../models/deliveryBoy-model");
const userModel = require("../models/user-model");
const fs = require("fs");

// Create Admin
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

// Login Admin
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

// Logout Admin
module.exports.logoutAdmin = async (req, res) => {
  try {
    res.cookie("token", "");
    res.send("Logout successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Create Company Details
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

// Update Company Name
module.exports.updateCompanyName = async (req, res) => {
  try {
    let { name } = req.body;
    if (name) {
      await companyDetailModel.updateMany({}, { $set: { name } });
      res.send("Company Name updated successfully");
    } else {
      res.send("You have to give a New Name");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Update Company Phone
module.exports.updateCompanyPhone = async (req, res) => {
  try {
    let { phone } = req.body;
    if (phone) {
      await companyDetailModel.updateMany({}, { $set: { phone } });
      res.send("Phone updated successfully");
    } else {
      res.send("You have to give a New Phone Number");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Update Company Email
module.exports.updateCompanyEmail = async (req, res) => {
  try {
    let { email } = req.body;
    if (email) {
      await companyDetailModel.updateMany({}, { $set: { email } });
      res.send("Company Email updated successfully");
    } else {
      res.send("You have to give a New Email Id");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Fetch Single Admin
module.exports.getAdmin = async (req, res) => {
  try {
    res.send(req.admin);
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Create Delivery Boy
module.exports.createDeliveryBoy = async (req, res) => {
  try {
    let { username, contact, address } = req.body;
    if (username && contact && address) {
      await deliveryBoyModel.create({
        username,
        contact,
        address,
      });
      res.send("Delivery Boy added successfully");
    } else {
      res.send("Something is missing");
    }
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Fetch Delivery Boy Info
module.exports.getDeliveryBoy = async (req, res) => {
  try {
    let deliveryBoys = await deliveryBoyModel.find({});
    res.send(deliveryBoys);
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Delete Delivery Boy
module.exports.deleteDeliveryBoy = async (req, res) => {
  try {
    let deliveryBoyId = req.query.deliveryBoyId;
    if (deliveryBoyId) {
      await deliveryBoyModel.findOneAndDelete({ _id: deliveryBoyId });
      res.send("Deivery boy deleted successfully");
    } else {
      res.send("Something is missing");
    }
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Fetch All Users
module.exports.getAllUsers = async (req, res) => {
  try {
    let users = await userModel.find({});
    res.send(users);
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
    const oldImage = req.admin.image;
    await adminModel.updateOne(
      { email: req.admin.email },
      { $set: { image: req.file.filename } }
    );
    if (oldImage)
      fs.unlink(
        `../Frontend/public/adminProfilePictures/${oldImage}`,
        (err) => {
          if (err) {
            console.log(err.message);
          }
        }
      );
    res.send("File uploaded successfully.");
  } catch (err) {
    res.send(err.message);
  }
};

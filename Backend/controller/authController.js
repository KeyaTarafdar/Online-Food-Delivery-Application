const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

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
            contact
          });

          let token = generateToken(user);
          res.cookie("token", token);

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

module.exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(req.body);
    if (email && password) {
      let user = await userModel.findOne({ email });

      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("Login successfully");
          } else {
            res.send("Wrong Password");
          }
        });
      } else {
        return res.status(401).send("Email or Password is wrong");
      }
    } else {
      return res.send("Something is missing");
    }
  } catch (err) {
    return res.status(501).send("Something went wrong");
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", "");
    res.send("Logout successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

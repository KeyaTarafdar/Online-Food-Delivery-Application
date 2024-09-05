// userController.js
const userModel = require("../models/user-model");
const orderModal = require("../models/order-model");
const foodModel = require("../models/food-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const dbgr = require("debug")("development:usercheck");
const fs = require("fs");
const mongoose = require("mongoose");
const orderModel = require("../models/order-model");

// Register User
module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, username, contact } = req.body;

    if (email && password && username && contact) {
      if (await userModel.findOne({ email })) {
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
// module.exports.getUser = async (req, res) => {
//   try {
//     if (req.user) {
//       let user = await userModel.findOne({ email: req.user.email });
//       res.send(user);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// };
module.exports.getUser = async (req, res) => {
  try {
    
    if (req.user) {
      let user = await userModel
        .findOne({ email: req.user.email })
        .populate({
          path: "cart",
          select: "name price id restaurent image",
        })
        .exec();

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      // Destructure the user object
      const {
        username,
        email,
        password,
        cart,
        orders,
        contact,
        address,
        image,
      } = user;

      // Create the transformed cart array
      const transformedCart = cart.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        restaurent: item.restaurent,
        image: item.image,
      }));

      // Construct the response object
      const responseUser = {
        username,
        email,
        cart: transformedCart,
        orders,
        contact,
        address,
        image,
      };

      // Send the response
      res.send(responseUser);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Internal Server Error" });
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

// Add to acrt
module.exports.addToCart = async (req, res) => {
  try {
    let user = req.user;
    let { foodId } = req.body;
    if (user.cart.includes(foodId)) {
      res.send("Item already present in the cart");
    } else {
      await userModel.findOneAndUpdate(
        { _id: user.id },
        { $push: { cart: foodId } }
      );
      res.send("Food item added to cart");
    }
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Delete item from the cart
module.exports.deleteItemFromCart = async (req, res) => {
  try {
    let user = req.user;
    let { foodId } = req.body;

    await userModel.findOneAndUpdate(
      { _id: user.id },
      { $pull: { cart: foodId } }
    );
    res.send("Food item removed from cart");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Add to cart increase quantity
module.exports.addToCartIncreaseQuantity = async (req, res) => {
  try {
    let user = req.user;
    let { foodId } = req.body;
    await userModel.findOneAndUpdate(
      { _id: user.id },
      { $push: { cart: foodId } }
    );
    res.send("Food item added to cart");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Delete cart item decrease quantity
module.exports.deleteCartItemDecreaseQuantity = async (req, res) => {
  try {
    let user = req.user;
    let { foodId } = req.body;

    const index = user.cart.indexOf(foodId);

    user.cart.splice(index, 1);
    await user.save();

    res.send("Food item removed from cart");
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Create order
module.exports.createOrder = async (req, res) => {
  try {
    let user = req.user;
    let { userCart, time, totalAmount } = req.body;

    const foodIds = userCart.map((food) => food.id);

    let order = await orderModal.create({
      userId: user._id,
      foodId: foodIds,
      time,
      totalAmount,
      orderAddress: user.address,
      phone: user.contact,
    });
    await userModel.findOneAndUpdate(
      { _id: user._id },
      { $push: { orders: order._id } }
    );
    res.send("Your order is placed successfylly");
  } catch (err) {
    res.send(err.message);
  }
};

// Fetch order of a particular user
// module.exports.fetchSingleOrder = async (req, res) => {
//   try {
//     let user = req.user;
//     let orderIds = user.orders;
//     res.send(orderIds);
//   } catch (err) {
//     res.send(err.message);
//   }
// };

// Fetch order by id
module.exports.fetchOrderById = async (req, res) => {
  try {
    let user = req.user;
    let orders = await user.populate({
      path: "orders",
      populate: { path: "foodId" },
    });
    res.send(orders);
  } catch (err) {
    res.send(err.message);
  }
};

// Cancle order
module.exports.cancleOrder = async (req, res) => {
  try {
    let orderId = req.query.id;
    let user = req.user;
    await userModel.updateOne(
      { _id: user._id },
      { $pull: { orders: orderId } }
    );
    await orderModel.findOneAndUpdate(
      { _id: orderId },
      { $set: { isDeleted: true } }
    );
    res.send("Order deleted");
  } catch (err) {
    res.send(err.message);
  }
};
const foodModel = require("../models/food-model");
const dbgr = require("debug")("development:usercheck");
const fs = require("fs");

// Create Food Item
module.exports.createFoodItems = async (req, res) => {
  if (!req.file) {
    return res.send("No file uploaded.");
  }
  try {
    let { name, price, category, quantity, restaurent } = req.body;
    if (name && category && restaurent && price) {
      await foodModel.create({
        name,
        price,
        category,
        quantity,
        restaurent,
        image: req.file.filename,
      });
      res.send("Food item added successfully");
    } else {
      res.send("Something is missing");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Fetch All Food Items
module.exports.fetchAllFoodItems = async (req, res) => {
  try {
    let foods = await foodModel.find({});
    res.send(foods);
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Delete Food Item
module.exports.deleteFoodItem = async (req, res) => {
  try {
    let id = req.query.id;
    if (id) {
      let food = await foodModel.findOne({ _id: id });
      const oldImage = food.image;
      if (oldImage)
        fs.unlink(`../Frontend/public/foodItemsPictures/${oldImage}`, (err) => {
          if (err) {
            console.log(err.message);
          }
        });
        
      await foodModel.findOneAndDelete({ _id: id });
      res.send("Item deleted successfully");
    }
  } catch (err) {
    res.send("Something went wrong");
  }
};

// Update Food Item
module.exports.updateFoodItem = async (req, res) => {
  try {
    let { id, name, price, category, quantity, restaurent } = req.body;
    console.log(req.body);
    let image = req.file;

    if (name !== "undefined") {
      await foodModel.findOneAndUpdate({ _id: id }, { $set: { name } });
    }
    if (price !== "0") {
      await foodModel.findOneAndUpdate({ _id: id }, { $set: { price } });
    }
    if (category !== "undefined") {
      await foodModel.findOneAndUpdate({ _id: id }, { $set: { category } });
    }
    if (quantity !== "undefined") {
      await foodModel.findOneAndUpdate({ _id: id }, { $set: { quantity } });
    }
    if (restaurent !== "undefined") {
      await foodModel.findOneAndUpdate({ _id: id }, { $set: { restaurent } });
    }

    if (image !== undefined) {
      let food = await foodModel.findOne({ _id: id });
      const oldImage = food.image;
      if (oldImage)
        fs.unlink(`../Frontend/public/foodItemsPictures/${oldImage}`, (err) => {
          if (err) {
            console.log(err.message);
          }
        });
      await foodModel.findOneAndUpdate(
        { _id: id },
        { $set: { image: image.filename } }
      );
    }

    res.send("Food item updated successfully");
  } catch (err) {
    res.send(err.message);
  }
};

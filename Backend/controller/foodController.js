const foodModel = require("../models/food-model");
const dbgr = require("debug")("development:usercheck");

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

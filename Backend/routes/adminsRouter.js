const express = require("express");
const router = express.Router();
const adminModel = require("../models/admin-model");

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
      await adminModel.create({
        username,
        email,
        password,
      });
      res.send("Admin created successfully");
    } else {
      res.send("Something is missing");
    }
  });
}

router.get("/", (req, res) => {
  res.send("Admin");
});

module.exports = router;

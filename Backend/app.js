const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose-connection");
const adminsRouter = require("./routes/adminsRouter");
const foodsRouter = require("./routes/foodsRouter");
const usersRouter = require("./routes/usersRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/admins", adminsRouter);
app.use("/users", usersRouter);
app.use("/foods", foodsRouter);

app.listen(8000);

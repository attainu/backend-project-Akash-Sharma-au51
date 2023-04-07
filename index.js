const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const ejs = require("ejs");
const multer = require('multer')


const authRoute = require("./routes/auth");
const quoteRoute = require("./routes/quote");

// constants
const secretKey = "secretKey";

// express app
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// setup session
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
  })
);

// inialize passport
app.use(passport.initialize());

app.use(passport.session());

mongoose
  .connect(
   mongodb://localhost:27017/
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));

// use route
app.use("/", authRoute);
app.use("/", quoteRoute);

app.listen(3000, () => {
  console.log("Server running at https://ll6ss8-3000.csb.app/");
});

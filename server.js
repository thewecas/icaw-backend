require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/user");
const tweetRoutes = require("./routes/tweet");
const connectDB = require("./utils/dbConnection");
const passport = require("passport");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

//routes
app.use(userRoutes);
app.use(tweetRoutes);

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));

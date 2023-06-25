require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const tweetRoutes = require("./routes/tweet");

const app = express();

app.use(express.json());
app.use(express.urlencoded())

//routes
app.use(userRoutes);
app.use(tweetRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection
  .on("error", (err) => console.error(err))
  .once("open", () => console.log("Conncetd to db"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));

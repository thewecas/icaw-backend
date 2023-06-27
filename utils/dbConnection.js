const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection
    .on("error", (err) => console.error(err))
    .once("open", () => console.log("Conncetd to db"));
};

module.exports = connectDB;

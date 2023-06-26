const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: String,
      },
    ],
    retweets: [
      {
        type: String,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tweet = new mongoose.model("tweets", Schema);
module.exports = Tweet;

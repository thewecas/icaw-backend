const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const {
  getTweet,
  getUserTweets,
  getAllTweets,
  addNewTweet,
  updateTweet,
  deleteTweet,
  handleLike,
  handlRetweet,
} = require("../controllers/tweet/tweetController");

router
  .get("/tweet", authToken, getAllTweets)
  .get("/tweet/:id", authToken, getTweet)
  .get("/tweet/user", authToken, getUserTweets)
  .post("/tweet", authToken, addNewTweet)
  .put("/tweet/:id", authToken, updateTweet)
  .delete("/tweet/:id", authToken, deleteTweet)
  .put("/tweet/like/:id", authToken, handleLike)
  .put("/tweet/retweet/:id", authToken, handlRetweet);

module.exports = router;

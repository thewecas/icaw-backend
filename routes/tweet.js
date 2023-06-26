const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");

const {
  getTweet,
  getUserTweets,
  getAllTweets,
} = require("../controllers/tweet/fetchController");
const addNewTweet = require("../controllers/tweet/newTweetController");
const updateTweet = require("../controllers/tweet/updateContoller");
const deleteTweet = require("../controllers/tweet/deleteContoller");
const handleLike = require("../controllers/tweet/likeController");
const handlRetweet = require("../controllers/tweet/retweetController");

router
  .get("/tweet/user", authToken, getUserTweets)
  .get("/tweet/:id", authToken, getTweet)
  .get("/tweet", authToken, getAllTweets)
  .post("/tweet", authToken, addNewTweet)
  .put("/tweet/:id", authToken, updateTweet)
  .delete("/tweet/:id", authToken, deleteTweet)
  .put("/tweet/like/:id", authToken, handleLike)
  .put("/tweet/retweet/:id", authToken, handlRetweet);

module.exports = router;

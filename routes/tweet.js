const express = require("express");
const router = express.Router();
const {
  addNewPost,
  getAllTweets,
  getTweet,
  updateTweet,
  deleteTweet,
  handleLike,
  handlRetweet,
} = require("../controllers/tweet/tweetController");

router
  .get("/tweet", getAllTweets)
  .get("/tweet/:id", getTweet)
  .post("/tweet", addNewPost)
  .put("/tweet/:id", updateTweet)
  .delete("/tweet/:id", deleteTweet)
  .patch("/tweet/like/:id", handleLike)
  .patch("/tweet/retweet/:id", handlRetweet);

module.exports = router;

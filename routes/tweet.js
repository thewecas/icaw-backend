const express = require("express");
const router = express.Router();

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
  .get("/user", getUserTweets)
  .get("/:id", getTweet)
  .get("/", getAllTweets)
  .post("/", addNewTweet)
  .put("/:id", updateTweet)
  .delete("/:id", deleteTweet)
  .put(
    "/like/:id",

    handleLike
  )
  .put(
    "/retweet/:id",

    handlRetweet
  );

module.exports = router;

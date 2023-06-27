const express = require("express");
const router = express.Router();
require("../middleware/passport");
const passport = require("passport");

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

  .get(
    "/tweet/user",
    passport.authenticate("jwt", { session: false }),
    getUserTweets
  )
  .get("/tweet/:id", passport.authenticate("jwt", { session: false }), getTweet)
  .get("/tweet", passport.authenticate("jwt", { session: false }), getAllTweets)
  .post("/tweet", passport.authenticate("jwt", { session: false }), addNewTweet)
  .put(
    "/tweet/:id",
    passport.authenticate("jwt", { session: false }),
    updateTweet
  )
  .delete(
    "/tweet/:id",
    passport.authenticate("jwt", { session: false }),
    deleteTweet
  )
  .put(
    "/tweet/like/:id",
    passport.authenticate("jwt", { session: false }),
    handleLike
  )
  .put(
    "/tweet/retweet/:id",
    passport.authenticate("jwt", { session: false }),
    handlRetweet
  );

module.exports = router;

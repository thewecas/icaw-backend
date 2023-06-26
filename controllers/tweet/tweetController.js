const { validateTweet } = require("../../utils/validateTweet");
const Tweet = require("../../model/Tweet");
const User = require("../../model/User");

//api endpoint for retreievig a single tweet by tweetId
const getTweet = async (req, res) => {
  const tweetId = req.params.id;

  try {
    const tweet = await Tweet.find({ _id: tweetId, isDeleted: false });
    return res.status(201).json(tweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoint to retrieving  tweets by userId
const getUserTweets = async (req, res) => {
  const userId = req.user.id;
  try {
    const tweets = await Tweet.find({ createdBy: userId, isDeleted: false });
    return res.status(200).json(tweets);
  } catch (error) {
    return res.status(500).json({ message: error.message.toString() });
  }
};

//api endpoint to retrieving all tweets
const getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find({ isDeleted: false });
    return res.status(201).json(tweets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoint for posting a tweet
const addNewTweet = async (req, res) => {
  const { tweet } = req.body;
  const userId = req.user.id;

  //validate tweet
  const { error } = validateTweet(req.body);
  if (error) return res.status(400).json({ message: error.message });

  try {
    const newTweet = await Tweet.create({
      tweet: tweet,
      createdBy: userId,
    });

    return res.status(200).json(newTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoint for updating the tweet
const updateTweet = async (req, res) => {
  const tweetId = req.params.id;
  const newTweet = req.body.tweet;

  try {
    const tweet = await Tweet.findById(tweetId);
    tweet.tweet = newTweet;

    const updatedTweet = await tweet.save();
    return res.status(200).json(updateTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoit for deleting the tweet
const deleteTweet = async (req, res) => {
  const tweetId = req.params.id;

  try {
    const deletedTweet = await Tweet.findByIdAndUpdate(tweetId, {
      isDeleted: true,
    });
    return res.status(201).json(deletedTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoint to handle like and unlike
const handleLike = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  try {
    const tweet = await Tweet.findById(tweetId);

    const index = tweet.likes.indexOf(userId);
    if (index == -1) tweet.likes.push(userId);
    else tweet.likes.splice(index, 1);

    //update the tweet
    const updatedTweet = await tweet.save();
    return res.status(201).json(updatedTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//api endpoint for handling retweet
const handlRetweet = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  try {
    const tweet = await Tweet.findById(tweetId);

    //owner cannot retweet
    if (tweet.createdBy == userId)
      return res.status(400).json({ message: "owner cannot retweet" });
    if (tweet.retweets.indexOf(userId) == -1) tweet.retweets.push(userId);
    const updatedTweet = await tweet.save();

    return res.status(200).json(updatedTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTweet,
  getUserTweets,
  getAllTweets,
  addNewTweet,
  updateTweet,
  deleteTweet,
  handleLike,
  handlRetweet,
};

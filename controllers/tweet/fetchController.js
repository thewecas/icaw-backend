const Tweet = require("../../model/Tweet");

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

module.exports = {
  getTweet,
  getUserTweets,
  getAllTweets,
};

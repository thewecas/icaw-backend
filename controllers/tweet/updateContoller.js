const Tweet = require("../../model/Tweet");

//api endpoint for updating the tweet
const updateTweet = async (req, res) => {
  const tweetId = req.params.id;
  const newTweet = req.body.tweet;

  try {
    const tweet = await Tweet.findById(tweetId);
    tweet.tweet = newTweet;

    const updatedTweet = await tweet.save();
    return res.status(200).json(updatedTweet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateTweet;

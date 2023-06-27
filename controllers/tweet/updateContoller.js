const Tweet = require("../../model/Tweet");

//api endpoint for updating the tweet
const updateTweet = async (req, res) => {
  const tweetId = req.params.id;
  const newTweet = req.body.tweet;
  const userId = req.user.id;

  try {
    const tweet = await Tweet.findById(tweetId);

    //check if user is the owner
    if (userId == tweet.createdBy) {
      tweet.tweet = newTweet;

      const updatedTweet = await tweet.save();
      return res.status(200).json(updatedTweet);
    } else {
      return res.status(401).json({ message: "unauthorized" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateTweet;

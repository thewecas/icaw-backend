const Tweet = require("../../model/Tweet");

//api endpoint for deleting the tweet
const deleteTweet = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  try {
    const tweet = await Tweet.findById(tweetId);

    //check if user if the owner
    if (userId == tweet.createdBy) {
      tweet.isDeleted = true;
      const deletedTweet = await tweet.save();
      return res.status(201).json(deletedTweet);
    } else return res.status(401).json({ message: "unauthorized" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteTweet;

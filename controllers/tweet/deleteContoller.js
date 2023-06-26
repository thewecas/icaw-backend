const Tweet = require("../../model/Tweet");

//api endpoint for deleting the tweet
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

module.exports = deleteTweet;

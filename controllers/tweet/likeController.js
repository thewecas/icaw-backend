const Tweet = require("../../model/Tweet");

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

module.exports = handleLike;

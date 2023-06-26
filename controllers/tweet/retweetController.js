const Tweet = require("../../model/Tweet");

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

module.exports = handlRetweet;

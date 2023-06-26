const { validateTweet } = require("../../utils/validateTweet");
const Tweet = require("../../model/Tweet");

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

module.exports = addNewTweet;

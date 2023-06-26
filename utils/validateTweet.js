const Joi = require("joi");

const validateTweet = (tweet) => {
  const Schema = Joi.object({
    tweet: Joi.string().min(1).max(280).required(),
    // userId: Joi.string().alphanum().required(),
  });

  return Schema.validate(tweet);
};

module.exports = { validateTweet };

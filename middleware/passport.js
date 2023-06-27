require("dotenv").config();
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../model/User");

const SECRET = process.env.ACCESS_TOKEN_SECRET;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

passport.use(
  new Strategy(jwtOptions, async (user, done) => {
    try {
      const existingUser = await User.findById(user.id);
      if (existingUser) {
        return done(null, existingUser);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

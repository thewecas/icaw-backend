require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const generateAccessToken = require("../../utils/generateAccessToken");

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  //validate
  if (!username || !password)
    return res.status(400).json({
      message: "Username and password are required",
    });

  //check if user exist
  const existingUser = await User.findOne({
    username: username,
    isDeleted: false,
  });
  if (!existingUser)
    return res.status(404).json({
      message: "Username not found",
    });

  //evaluate password
  const pwdMatch = bcrypt.compareSync(password, existingUser.password);
  if (pwdMatch) {
    //sign jwt
    const user = {
      id: existingUser.id,
      username: existingUser.username,
      name: existingUser.name,
    };

    //create access token
    const accessToken = generateAccessToken(user);

    // //create refresh token
    // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    // existingUser.refreshToken = refreshToken;
    // const updatedUser = await existingUser.save();

    //store accessToken in the cookie
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      ...user,
      accessToken: accessToken,
      // refreshToken: refreshToken,
    });
  } else
    return res.status(401).json({
      message: "Incorrect password",
    });
};

module.exports = {
  handleLogin,
};

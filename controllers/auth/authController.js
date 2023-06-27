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

  try {
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

    if (!pwdMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    //sign jwt
    const user = {
      id: existingUser.id,
      username: existingUser.username,
      name: existingUser.name,
    };

    //create access token
    const accessToken = generateAccessToken(user);

    return res.status(200).json({
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleLogin;

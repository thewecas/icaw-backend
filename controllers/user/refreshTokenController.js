require("dotenv").config();
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  //
  if (!cookies?.jwt) return res.sendStatus(401);
};

module.exports = { handleRefreshToken };

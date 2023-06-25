const express = require("express");
const router = express.Router();
const { handleNewUser } = require("../controllers/user/registerController");
const { handleLogin } = require("../controllers/user/authController");
const {
  handleRefreshToken,
} = require("../controllers/user/refreshTokenController");

router.post("/user/signup", handleNewUser).post("/user/login", handleLogin);
// .get("/refresh", handleRefreshToken);

module.exports = router;

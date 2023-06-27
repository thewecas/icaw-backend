const express = require("express");
const router = express.Router();

const handleNewUser = require("../controllers/user/registerController");
const handleLogin = require("../controllers/user/authController");

router.post("/signup", handleNewUser).post("/login", handleLogin);

module.exports = router;

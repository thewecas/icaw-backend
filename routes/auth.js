const express = require("express");
const router = express.Router();

const handleNewUser = require("../controllers/auth/registerController");
const handleLogin = require("../controllers/auth/authController");

router.post("/register", handleNewUser).post("/login", handleLogin);

module.exports = router;

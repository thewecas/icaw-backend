const express = require("express");
const router = express.Router();
const handleNewUser = require("../controllers/user/registerController");
const handleLogin = require("../controllers/user/authController");
const deleteUser = require("../controllers/user/deleteUserController");
const updatePassword = require("../controllers/user/updatePasswordController");

const authToken = require("../middleware/authToken");

router
  .post("/user/signup", handleNewUser)
  .post("/user/login", handleLogin)
  .put("/user", authToken, updatePassword)
  .delete("/user", authToken, deleteUser);

module.exports = router;

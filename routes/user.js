const express = require("express");
const router = express.Router();
const handleNewUser = require("../controllers/user/registerController");
const handleLogin = require("../controllers/user/authController");
const deleteUser = require("../controllers/user/deleteUserController");
const updatePassword = require("../controllers/user/updatePasswordController");
const passport = require("passport");

require("../middleware/passport");

router
  .post("/user/signup", handleNewUser)
  .post("/user/login", handleLogin)
  .put(
    "/user",
    passport.authenticate("jwt", { session: false }),
    updatePassword
  )
  .delete(
    "/user",
    passport.authenticate("jwt", { session: false }),
    deleteUser
  );

module.exports = router;

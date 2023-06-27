const express = require("express");
const router = express.Router();

const deleteUser = require("../controllers/user/deleteUserController");
const updatePassword = require("../controllers/user/updatePasswordController");

const passport = require("passport");
require("../middleware/passport");

router.put("/", updatePassword).delete("/", deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();

const deleteUser = require("../controllers/user/deleteUserController");
const updatePassword = require("../controllers/user/updatePasswordController");

const passport = require("passport");
require("../middleware/passport");

router.put("/password", updatePassword).delete("/delete", deleteUser);

module.exports = router;

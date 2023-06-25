const User = require("../../model/User");
const bcrypt = require("bcryptjs");

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

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
  if (pwdMatch) return res.status(200).json(existingUser);
  else
    return res.status(401).json({
      message: "Incorrect password",
    });
};

module.exports = {
  handleLogin,
};

const bcrypt = require("bcryptjs");
const User = require("../../model/User");

const updatePassword = async (req, res) => {
  const currPassword = req.body.currPassword;
  const newPassword = req.body.newPassword;
  const userId = req.user.id;

  //validate password

  try {
    const user = await User.findById(userId);

    //evaluate password
    const pwdMatch = bcrypt.compareSync(currPassword, user.password);

    if (pwdMatch) {
      //encrypt the password
      const hashedPwd = bcrypt.hashSync(newPassword, 10);

      //update & store the new password
      user.password = hashedPwd;
      const updatedUser = await user.save();
      return res.status(200).json(updatedUser);
    } else return res.status(400).json({ message: "password is incorrect" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updatePassword;

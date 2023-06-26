const User = require("../../model/User");

const deleteUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const deletedUser = await User.findByIdAndUpdate(userId, {
      isDeleted: true,
      // email: null,
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteUser;

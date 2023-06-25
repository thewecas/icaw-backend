const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const { validateUser } = require("../../utils/validateUser");

const handleNewUser = async (req, res) => {
  const { username, password, name, email } = req.body;
  console.log(req.body);

  //validate user input
  const { error } = validateUser(req.body);
  if (error) return res.status(400).json({ message: error.message });

  //check for duplicate username
  const duplicateUsername = await User.findOne({ username: username });
  if (duplicateUsername)
    return res.status(400).json({ message: "Username is already taken" });

  //check for duplicate email
  const duplicateEmail = await User.findOne({ email: email });
  if (duplicateEmail)
    return res
      .status(400)
      .json({ message: "An account with this email already exist" });

  try {
    //encrypt the password
    const hashedPwd = bcrypt.hashSync(password, 10);

    //create and store the new user
    const newUser = await User.create({
      name: name,
      email: email,
      username: username,
      password: hashedPwd,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };

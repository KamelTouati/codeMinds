const Users = require("../models/users");
const { strings } = require("../constants");
const authentication = require("../middlewares/authentication");

class AuthController {
  register = async (req, res) => {
    const { username, email, password } = req.body;
    const user = await Users.create({
      username,
      email,
      password,
    });
    return res.json({ msg: strings.REGISTRED_SUCCESSFULLY });
  };

  login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.login(email, password);
    const token = authentication.createToken(user._id);
    return res.json({ token, role: user.role });
  };

  getProfile = async (req, res) => {
    const user = await Users.findById(req.user._id);
    if (user != null) {
      return res.json(user);
    } else {
      let err = new Error("User not found!");
      err.statusCode = 404;
      throw err;
    }
  };
}

module.exports = new AuthController();

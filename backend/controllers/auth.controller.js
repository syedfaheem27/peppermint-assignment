const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.logIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({
        status: "fail",
        message: "username or password is missing",
      });

    const user = await User.findOne({ username }).select("+password");
    const isCorrect = (await user?.isCorrectPassword(password)) ?? false;

    if (!user || !isCorrect)
      return res.status(404).json({
        status: "fail",
        message: "Username or Password is incorrect",
      });

    const token = signToken({ username });

    user.password = undefined;

    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

function signToken(username) {
  return jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

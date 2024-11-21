exports.logIn = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

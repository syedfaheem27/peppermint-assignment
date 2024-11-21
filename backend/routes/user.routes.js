const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "Users",
  });
});
router.route("/:userId").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: `${req.params.userId}`,
  });
});
module.exports = router;

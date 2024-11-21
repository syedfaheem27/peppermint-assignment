const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

router.route("/").get(userController.getAllUsers).post(userController.addUser);
router.route("/:userId").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: `${req.params.userId}`,
  });
});
module.exports = router;

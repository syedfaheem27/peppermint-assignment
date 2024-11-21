const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

router.post("/login", authController.logIn);
router.post("/signup", authController.signUp);

router.route("/").get(userController.getAllUsers).post(userController.addUser);
router.route("/:userId").get(userController.getUser);
module.exports = router;

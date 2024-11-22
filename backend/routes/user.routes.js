const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");

router.post("/login", authController.logIn);
router.post("/signup", userController.addUser);

router.route("/").get(userController.getAllUsers);
router.route("/:userId").get(authController.isLoggedIn, userController.getUser);
module.exports = router;

const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenses.controller");
const authController = require("../controllers/auth.controller");

router
  .route("/:userId")
  .get(expenseController.getExpenseForUser)
  .post(authController.isLoggedIn, expenseController.addExpense);

module.exports = router;

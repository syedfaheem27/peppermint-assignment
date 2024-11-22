const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenses.controller");

router
  .route("/:userId")
  .get(expenseController.getExpenseForUser)
  .post(expenseController.addExpense);

module.exports = router;

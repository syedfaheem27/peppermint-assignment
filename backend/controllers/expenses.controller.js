const Expense = require("../models/expenses.model");

exports.addExpense = async (req, res) => {
  try {
    if (!req.params.userId || !req.user)
      return res.status(400).json({
        status: "fail",
        message: "No User Id found",
      });

    const expense = await Expense.create({
      amount: req.body.amount,
      name: req.body.name,
      description: req.body.description ?? "",
      userId: req.user._id,
    });

    console.log(expense);

    res.status(201).json({
      status: "success",
      data: {
        expense,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getExpenseForUser = async (req, res) => {
  try {
    if (!req.params.userId)
      return res.status(400).json({
        status: "fail",
        message: "No User Id found",
      });

    const expenses = await Expense.findOne({ userId: req.params.userId });

    res.status(200).json({
      status: "success",
      data: {
        expenses,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const Expense = require("../models/expenses.model");

exports.addExpense = async (req, res) => {
  try {
    if (!req.params.userId)
      return res.status(400).json({
        status: "fail",
        message: "No User Id found",
      });

    if (!user)
      return res.status(401).json({
        status: "fail",
        message: "Not authenticated",
      });

    const expense = Expense.create({
      ...req.body,
      userId: req.params.userId,
    });

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

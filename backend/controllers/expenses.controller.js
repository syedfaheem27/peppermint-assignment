const Expense = require("../models/expenses.model");

exports.addExpense = async (req, res) => {
  try {
    const user = req.user;

    if (!user)
      return res.status(401).json({
        status: "fail",
        message: "Not authenticated",
      });

    const expense = Expense.create({
      ...req.body,
      userId: user._id,
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
    const expenses = await Expense.findOne({ userId: req.user._id });

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

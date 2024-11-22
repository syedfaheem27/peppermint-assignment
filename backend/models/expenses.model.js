const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Can't have an expense without a user"],
  },
  amount: {
    type: Number,
    required: [true, "An expense must have an amount"],
  },
  description: {
    type: String,
    maxLength: [50, "The description shouldn't be more than 50 words long."],
  },
  name: {
    type: String,
    required: [true, "An expense must have a name"],
    minLength: [6, "The expense name must be atleast 6 word in length"],
    maxLength: [20, "The expense name can't be more than 20 words in length"],
  },
});
const expenseModel = mongoose.model("Expenses", expenseSchema);

module.exports = expenseModel;

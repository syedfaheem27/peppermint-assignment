const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const expenseRouter = require("./routes/expense.routes");

const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/.env` });

const app = express();

app.use(express.json());

const DB_Conn = process.env.DB_CONN_STRING.replace(
  "<DB_USERNAME>",
  process.env.DB_USERNAME
).replace("<DB_PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB_Conn)
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(8000, () => {
      console.log("Listening on port 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/users", userRouter);
app.use("/api/v1/expense", userRouter);

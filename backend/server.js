const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const http = require("http");

const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_LOCAL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("connected to database");
  }
);

const userRoute = require("./api/routes/auth");
const uploadRoute = require("./api/routes/upload");
const authDashboard = require("./api/routes/authDashboard");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/upload", uploadRoute);
app.use("/dashboard", authDashboard);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log(error);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT;

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Listening on port " + port);
});

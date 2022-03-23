const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const http = require("http");

const userRoute = require("./api/routes/user");
const uploadRoute = require("./api/routes/upload");

const mongoose = require("mongoose");

// mongoose.connect(
//   "mongourl",
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   }
// );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/upload", uploadRoute);

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

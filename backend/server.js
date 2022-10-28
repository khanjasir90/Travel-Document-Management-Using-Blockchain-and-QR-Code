const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const http = require("http");

//web3 integration
const cors = require("cors");
const Web3 = require("web3");

//  const contract = require('@truffle/contract');
const artifacts = require("./build/contracts/TravelDoc.json");

// const ipfsAPI = require("ipfs-api");
const fs = require("fs");
const Contract = new require("./Contract");
const Provider = new require("./Provider");
const contract = new Contract();
const provider = new Provider();
const web3 = provider.web3;
const instance = contract.initContract();
// const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });

const userRoute = require("./api/routes/auth");
const uploadRoute = require("./api/routes/upload");
const activateRoute = require("./api/routes/activate");
const viewRoute = require("./api/routes/view");
const dashboardRoute = require("./api/routes/dashboard");

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

app.use(cors());
const corsOptions = {
  origin: "3000", //access-control-allow-credentials:false
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/upload", uploadRoute);
app.use("/activate", activateRoute);
app.use("/view", viewRoute);
app.use("/dashboard", dashboardRoute);

app.get("/test", async (req, res) => {
  const accounts = await web3.eth.getAccounts();
  //console.log(accounts);
  // const result = await instance.methods.testcontract().call();
  // console.log(result);
  const testFile = fs.readFileSync("./uploads/username-ss2.png");
  let testBuffer = new Buffer(testFile);
  ipfs.files.add(testBuffer, (err, file) => {
    if (err) console.log(err);
    else console.log(file[0].hash);
  });
});

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

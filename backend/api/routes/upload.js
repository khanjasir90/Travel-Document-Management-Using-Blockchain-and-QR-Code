const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ipfsAPI = require("ipfs-api");
Tesseract = require("tesseract.js");
const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });
const Contract = require("../../Contract");
const Provider = require("../../Provider");
const contract = new Contract();
const provider = new Provider();
const web3 = provider.web3;
const instance = contract.initContract();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.email + "-rc-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/uploadrc", upload.single("image"), async (req, res, next) => {
  console.log(path.resolve("./" + req.file.path));
  fs.rename(
    "./uploads/" + req.file.filename,
    "./uploads/" + req.body.email + "-rc.png",
    () => {
      console.log("renamed");
    }
  );

  t = [];
  a = [];
  j = {};
  Tesseract.recognize("./uploads/" + req.body.email + "-rc.png", "eng")
    .then(({ data: { text } }) => {
      t = text.split("\n");
      for (let i = 0; i < t.length; i++) {
        s = t[i].split("-");

        if (s[0] != "") {
          a.push(s);
        }
      }
      for (let i = 0; i < a.length; i++) {
        a[i][0] = a[i][0].replace(" ", "_");
        j[a[i][0]] = a[i][1];
      }
      console.log(j);

      const testFile = fs.readFileSync(
        "./uploads/" + req.body.email + "-rc.png"
      );
      let testBuffer = new Buffer(testFile);
      ipfs.files.add(testBuffer, async (err, file) => {
        if (err) console.log(err);
        else {
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0]);
          try {
            await instance.methods
              .add_rc(
                file[0].hash,
                '1S',
                j.Validity,
                j.registration_date,
                j.chasis_number,
                j.engine_no,
                j.model,
                j.seat
              )
              .send({ from: accounts[0], gas: 300000 });
            const response = await instance.methods.getId().call();
            console.log(response);
            const result1 = await instance.methods
              .get_rc_details(response)
              .call();
            console.log(result1);
          } catch (err) {
            console.log(err);
          }
        }
      });
      // res.status(200).json({ message: "file uploaded" });
      return res.status(200).json(j);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });

  // res.status(200).json({ message: "file uploaded" });
});

router.post("/uploadpuc", upload.single("image"), (req, res, next) => {
  console.log(path.resolve("./" + req.file.path));
  fs.rename(
    "./uploads/" + req.file.filename,
    "./uploads/" + req.body.email + "-puc.png",
    () => {
      console.log("renamed");
    }
  );
  t = [];
  a = [];
  j = {};
  Tesseract.recognize("./uploads/" + req.body.email + "-puc.png", "eng", {
    logger: (m) => console.log(m),
  })
    .then(({ data: { text } }) => {
      t = text.split("\n");
      for (let i = 0; i < t.length; i++) {
        s = t[i].split("-");

        if (s[0] != "") {
          a.push(s);
        }
      }
      for (let i = 0; i < a.length; i++) {
        a[i][0] = a[i][0].replace(" ", "_");
        j[a[i][0]] = a[i][1];
      }
      console.log(j);
      const testFile = fs.readFileSync(
        "./uploads/" + req.body.email + "-puc.png"
      );
      let testBuffer = new Buffer(testFile);
      ipfs.files.add(testBuffer, async (err, file) => {
        if (err) console.log(err);
        else {
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0]);
          try {
            await instance.methods
              .add_puc(file[0].hash,'1', j.Validity)
              .send({ from: accounts[0], gas: 300000 });
            const response = await instance.methods.getId().call();
            console.log(response);
            const result1 = await instance.methods
              .get_puc_details(response)
              .call();
            console.log(result1);
          } catch (err) {
            console.log(err);
          }
        }
      });
      // return res.status(200).json({ "puc-details": j });
      return res.status(200).json({ message: "file uploaded" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json(j);
      // return res.status(500).json({ error: err });
    });
});

router.post("/uploadinsurance", upload.single("image"), (req, res, next) => {
  console.log(path.resolve("./" + req.file.path));
  fs.rename(
    "./uploads/" + req.file.filename,
    "./uploads/" + req.body.email + "-insurance.png",
    () => {
      console.log("renamed");
    }
  );
  t = [];
  a = [];
  j = {};
  Tesseract.recognize("./uploads/" + req.body.email + "-insurance.png", "eng", {
    logger: (m) => console.log(m),
  })
    .then(({ data: { text } }) => {
      t = text.split("\n");
      for (let i = 0; i < t.length; i++) {
        s = t[i].split("-");

        if (s[0] != "") {
          a.push(s);
        }
      }
      for (let i = 0; i < a.length; i++) {
        a[i][0] = a[i][0].replace(" ", "_");
        j[a[i][0]] = a[i][1];
      }
      console.log(j);
      const testFile = fs.readFileSync(
        "./uploads/" + req.body.email + "-insurance.png"
      );
      let testBuffer = new Buffer(testFile);
      ipfs.files.add(testBuffer, async (err, file) => {
        if (err) console.log(err);
        else {
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0]);
          try {
            await instance.methods
              .add_insurance(file[0].hash, '1', j.Validity)
              .send({ from: accounts[0], gas: 300000 });
            const response = await instance.methods.getId().call();
            console.log(response);
            const result1 = await instance.methods
              .get_insurance_details(response)
              .call();
            console.log(result1);
          } catch (err) {
            console.log(err);
          }
        }
      });
      res.status(200).json({ message: "file uploaded" });

      return res.status(200).json(j);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
  // res.status(200).json({ message: "file uploaded" });
});

module.exports = router;

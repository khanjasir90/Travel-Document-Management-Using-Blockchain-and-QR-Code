const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
Tesseract=require('tesseract.js');
const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });

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

router.post("/uploadrc", upload.single("image"),async (req, res, next) => {
  console.log(path.resolve("./" + req.file.path));
  fs.rename(
    "./uploads/" + req.file.filename,
    "./uploads/" + req.body.email + "-rc.png",
    () => {
      console.log("renamed");
    }
  );
  
  t=[]
  a=[]
  j={}
Tesseract.recognize(
    "./uploads/" + req.body.email + "-rc.png",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    t=text.split('\n')
    for (let i = 0; i < t.length; i++) {
        s=t[i].split('-')
        
        if(s[0]!=''){
        a.push(s)
        }
    }
    for(let i=0;i<a.length;i++){
        
      a[i][0] = a[i][0].replace(" ", "_");
      j[(a[i][0])]=a[i][1]

        
    }
    console.log(j)
    const testfile = fs.readFileSync("./uploads/"+req.body.email + "-rc.png");
    let testBuffer = new Buffer(testfile);
    ipfs.files.add(testBuffer,(err,file) => {
      if(err) console.log(err);
      else console.log(file[0].hash)
    });
    
    // return res.status(200).json({"rc-details":j})
  }).catch(err => {
    console.log(err);
    return res.status(500).json({"error":err})
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
  t=[]
  a=[]
  j={}
Tesseract.recognize(
    "./uploads/" + req.body.email + "-puc.png",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    t=text.split('\n')
    for (let i = 0; i < t.length; i++) {
        s=t[i].split('-')
        
        if(s[0]!=''){
        a.push(s)
        }
    }
    for(let i=0;i<a.length;i++){
        
      a[i][0] = a[i][0].replace(" ", "_");
      j[(a[i][0])]=a[i][1]

        
    }
    console.log(j)
    return res.status(200).json({"puc-details":j})
  }).catch(err => {
    console.log(err);
    return res.status(500).json({"error":err})
  });
  // res.status(200).json({ message: "file uploaded" });
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
  t=[]
  a=[]
  j={}
Tesseract.recognize(
    "./uploads/" + req.body.email + "-insurance.png",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    t=text.split('\n')
    for (let i = 0; i < t.length; i++) {
        s=t[i].split('-')
        
        if(s[0]!=''){
        a.push(s)
        }
    }
    for(let i=0;i<a.length;i++){
        
      a[i][0] = a[i][0].replace(" ", "_");
      j[(a[i][0])]=a[i][1]

        
    }
    console.log(j)
    return res.status(200).json({"insurance-details":j})
  }).catch(err => {
    console.log(err);
    return res.status(500).json({"error":err})
  });
  // res.status(200).json({ message: "file uploaded" });
});

module.exports = router;
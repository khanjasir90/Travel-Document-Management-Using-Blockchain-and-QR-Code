const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const User = require("../models/user");

router.post("/register", async (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        const password = Math.round(
          Math.pow(36, 6 + 1) - Math.random() * Math.pow(36, 6)
        )
          .toString(36)
          .slice(1);

        const transporter = nodemailer.createTransport({
          port: 465, // true for 465, false for other ports
          host: "smtp.gmail.com",
          auth: {
            user: "sihvenom23@gmail.com",
            pass: "venom@123",
          },
          secure: true,
        });
        const mailData = {
          from: "sihvenom23@gmail.com", // sender address
          to: req.body.email, // list of receivers
          subject: "Password for your account",
          text: password,
        };
        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.log(err);
            return res.status(500).json({ error: err });
          } else console.log(info);
        });

        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              firstname: req.body.fname,
              lastname: req.body.lname,
              dob: req.body.dob,
              aadharcard: req.body.aadhar,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.TOKEN_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;

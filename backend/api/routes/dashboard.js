const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:email", (req, res, next) => {
  User.findOne({ email: req.params.email })
    .exec()
    .then((user) => {
      console.log(user);
      return res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;

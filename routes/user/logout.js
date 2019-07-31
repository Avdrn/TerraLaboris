const express = require('express');
const router  = express.Router();
const User    = require("../../models/User");
const bcrypt  = require("bcrypt");

router.get("/", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});

module.exports = router;

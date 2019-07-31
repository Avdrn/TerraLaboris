const express = require('express');
const router  = express.Router();

// User model
const User           = require("../../models/User");

// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('./user/signup');
});


/* post on database */

router.post("/", (req, res, next) => {
  const email    = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const title    = req.body.title;

  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
    res.render("user/signup", {
      errorMessage: "Indicate an email, username and a password to sign up"
    });
    return;
  }

  User.create({
    email,
    username,
    password: hashPass,
    title,
  })
  .then(() => {
    res.redirect("/");
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;

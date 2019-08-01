const express = require('express');
const router  = express.Router();
const User    = require("../../models/User");
const bcrypt  = require("bcrypt");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('user/login');
});

router.post("/", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("user/login", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render('user/login', {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/about");
      } else {
        res.render('user/login', {
          errorMessage: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error);
  })
});

module.exports = router;

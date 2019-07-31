const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")

router.get('/', (req, res, next) => {
  res.render("jurisprudence/add");
});


router.post('/', (req, res, next) => {
  const {author, date, content} = req.body;

  const newJurisprudence = new Jurisprudence({ author, date, content});
  
  newJurisprudence.save()
    .then((decision) => {
      res.redirect('/about');
    })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router;
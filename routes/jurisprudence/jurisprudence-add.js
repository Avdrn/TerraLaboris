const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")
var multer = require("multer")
var upload = require("../../models/upload");


router.get('/', (req, res, next) => {
  res.render("jurisprudence/jurisprudence-add");
});


router.post('/', (req, res, next) => {
  console.log(req)
  const {author, date, content} = req.body;

  // const Jurisprudence = new Jurisprudence({ author, date, content, path});

  Jurisprudence.create({author: author, date: date, content: content, path: req.file.filename})
    .then((jurisprudence)=> {
      console.log("jurisprudence ajoutée")
      res.redirect('/jurisprudence-all');
    })

    .catch((error) => {
      console.log(error);
    })


});

module.exports = router;


const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")
 
router.get('/:id', (req, res, next) => {
  Jurisprudence.findById(req.params.id)
  .then((jurisprudence) => {
    debugger

    res.render('jurisprudence/jurisprudence-edit', {jurisprudence});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/:id', (req, res, next) => {
  const {author, date, content} = req.body;
  debugger
  Jurisprudence.findByIdAndUpdate(req.params.id, {author, date, content})
    .then((jurisprudence) => {
      debugger
      res.redirect('/jurisprudence-all');
    })
    .catch((error) => {
      console.log(error);
    })
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")


router.get('/:id', (req, res, next) => {
  Jurisprudence.findByIdAndRemove(req.params.id)
  .then((jurisprudence) => {
    console.log(jurisprudence)
    res.redirect('/jurisprudence-all');  
  })
  .catch((error) => {
    console.log(error);
  })
});


module.exports = router;
const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")


router.get('/:id', (req, res, next) => {
  Jurisprudence.findById(req.params.id)
  .then((jurisprudence) => {
  res.render("jurisprudence/jurisprudence-single", {jurisprudence});
})
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;


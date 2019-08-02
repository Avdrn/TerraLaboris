const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")
const moment = require("moment");



router.get('/:id', (req, res, next) => {
  Jurisprudence.findById(req.params.id)
  .then((jurisprudence) => {
  jurisprudence.parsedDate = moment(jurisprudence.date).format("YYYY-MM-DD")
  res.render("jurisprudence/jurisprudence-single", {jurisprudence});
})
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;


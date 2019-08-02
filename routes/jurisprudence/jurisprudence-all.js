const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")
const upload = require("../../models/upload")
const moment = require("moment");



router.get('/', (req, res) => {
  Jurisprudence.find({})
   .then((jurisprudence)=> {
    jurisprudence.parsedDate = moment(jurisprudence.date).format("YYYY-MM-DD")
     res.render("jurisprudence/jurisprudence-all", {jurisprudence})
   })
   .catch(err => {
     console.log(err)
 });
})


module.exports = router;
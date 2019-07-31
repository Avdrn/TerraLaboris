const express = require("express");
const router = express.Router();
const Jurisprudence = require("../../models/Jurisprudence")


router.get('/', (req, res) => {
  Jurisprudence.find({})
   .then((jurisprudence)=> {
     res.render("jurisprudence/jurisprudence-all", {jurisprudence})
   })
   .catch(err => {
     console.log(err)
 });
})


module.exports = router;
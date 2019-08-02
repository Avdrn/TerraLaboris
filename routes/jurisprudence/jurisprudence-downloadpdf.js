const express = require("express");
const router = express.Router();
var fs = require('fs')
const Jurisprudence = require("../../models/Jurisprudence")



router.get('/:id', function (req, res) {
  Jurisprudence.findById(req.params.id)
  var filePath = "jurisprudence.path";

  fs.readFile(__dirname + filePath , function (err,data){
      res.contentType("application/pdf");
      res.send(data);
  });
});

  module.exports = router;
const express = require("express");
const router = express.Router();


app.get('/download', function(req, res){
  const file = `${__dirname}/upload-folder/dramaticpenguin.MOV`;
  res.download(file); // Set disposition and send it.
});
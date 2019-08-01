    
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var uploadSchema = new Schema({
    path: String,
})

module.exports = mongoose.model("uploads", uploadSchema, "uploads");
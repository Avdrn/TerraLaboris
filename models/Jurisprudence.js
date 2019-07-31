const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const jurisprudenceSchema = new Schema({
  author: String,
  date: Date,
  content: String
}, {
  timestamps: true
});

const Jurisprudence = mongoose.model("jurisprudence", jurisprudenceSchema);

module.exports = Jurisprudence;
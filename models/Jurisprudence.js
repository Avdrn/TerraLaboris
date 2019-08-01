const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const jurisprudenceSchema = new Schema({
  author: String,
  date: Date,
  content: String,
  path: String,
}, {
  timestamps: true
});

const Jurisprudence = mongoose.model("jurisprudence", jurisprudenceSchema, "jurisprudences");

module.exports = Jurisprudence;
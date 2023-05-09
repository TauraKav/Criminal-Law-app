const mongoose = require("mongoose");

const criminalCodeArticleSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  criminalCodeSection: { type: String, required: true, min: 3 },
  creationDate: { type: Date, required: true },
  casesId: { type: Array, required: true },
  id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("criminalCodeArticle", criminalCodeArticleSchema);
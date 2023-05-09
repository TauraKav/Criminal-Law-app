const uniqid = require("uniqid");
const criminalCodeArticleModel = require("../models/criminalCodeArticle");

module.exports.INSERT_ARTICLE = async (req, res) => {
  const article = new criminalCodeArticleModel({
    title: req.body.title,
    criminalCodeSection: req.body.section, 
    creationDate: new Date(),
    casesId: [],
    id: uniqid(),
  });

  await article.save();

  res.status(200).json({ response: "article" });
};

module.exports.GET_ALL_ARTICLES = async (req, res) => {
  const article = await criminalCodeArticleModel.find();

  res.status(200).json({ article : article  });
};
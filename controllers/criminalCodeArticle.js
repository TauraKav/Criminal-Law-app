const uniqid = require("uniqid");
const criminalCodeArticleModel = require("../models/criminalCodeArticle");
const caseModel = require("../models/case");
const jwt = require("jsonwebtoken");

module.exports.INSERT_ARTICLE = async (req, res) => {
try { 
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ response: "Auth failed" });
    }

  const article = new criminalCodeArticleModel({
    title: req.body.title,
    criminalCodeSection: req.body.criminalCodeSection, 
    creationDate: new Date(),
    casesId: [],
    id: uniqid(),
  });

  await article.save();

  res.status(200).json({ response: "article was created" });}
  )
}
 catch (err) {
  console.log("err", err);
  return res.status(500).json({ response: "ERROR" });

};
};

module.exports.GET_ALL_ARTICLES = async (req, res) => {
  const article = await criminalCodeArticleModel.find();

  res.status(200).json({ article : article  });
};

module.exports.GET_ARTICLE_BY_ID = async (req, res) => {
  const article = await criminalCodeArticleModel.findOne({ id: req.params.id });

  res.status(200).json({ criminalCodeArticle: article });
};

module.exports.DELETE_ARTICLE_BY_ID = async (req, res) => {
  const article = await criminalCodeArticleModel.findOneAndDelete({ id: req.params.id });

  res
    .status(200)
    .json({ response: "Group was deleted successfully", article: article});
};


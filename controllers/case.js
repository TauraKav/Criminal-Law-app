const caseModel = require("../models/case");
const criminalCodeArticleModel = require("../models/criminalCodeArticle");

module.exports.INSERT_CASE = async (req, res) => {
    const criminalCase= new caseModel({
              caseNumber: req.body.caseNumber,
              courtDecisionDate: req.body.courtDecisionDate,
              court: req.body.court,
              contentText: req.body.contentText,
              creatorId: [],
             articleId:[],
              id: uniqid()
    });

    const addedCase = await criminalCase.save();

      
    criminalCodeArticleModel.updateOne(
      { id: req.body.criminalCodeArticleId },
      { $push: { articleId: addedCase.id } }
    ).exec();
  

    res.status(200).json({ response: "case was added" });
};




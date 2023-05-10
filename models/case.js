const mongoose = require("mongoose");

const caseSchema = mongoose.Schema({
    caseNumber: { type: String, required: true, min: 3 },
    courtDecisionDate: { type: Date, required: true },
    court: { type: String, required: true, min: 3 },
    contentText: { type: String, required: true, min: 3 },
    creatorId: { type: String, required: true, min: 7 },
    articleId: { type: String, required: true, min: 7 },
    id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("case", caseSchema);
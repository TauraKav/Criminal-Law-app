const mongoose = require("mongoose");

const caseSchema = mongoose.Schema({
    caseNumber: { type: String, required: true, min: 3 },
    courtDecisionDate: { type: Date, required: true },
    court: { type: String, required: true, min: 3 },
    contentText: { type: String, required: true, min: 3 },
    creator: { userId },
    article: { articleId },
    id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("case", caseSchema);
const express = require("express");
const router = express.Router();
const { 
    INSERT_CASE,
    // GET_CASE_BY_ID, 
    // UPDATE_CASE_CONTENT_BY_ID,
    // DELETE_CASE_BY_ID
    } = require("../controllers/case");

router.post("/case", INSERT_CASE);
router.get("/case/:id", INSERT_CASE);
router.put("/case/content/:id", INSERT_CASE);
router.delete("/case/:id", INSERT_CASE);
// router.post("/case", INSERT_CASE);
// router.get("/case/:id", GET_CASE_BY_ID);
// router.put("/case/content/:id", UPDATE_CASE_CONTENT_BY_ID);
// router.delete("/case/:id", DELETE_CASE_BY_ID);

module.exports = router;
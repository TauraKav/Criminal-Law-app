const express = require("express");
const router = express.Router();
const {
    INSERT_ARTICLE,
    GET_ALL_ARTICLES,
    GET_ARTICLE_BY_ID,
    DELETE_ARTICLE_BY_ID,
} = require("../controllers/criminalCodeArticle");


router.post("/article", INSERT_ARTICLE);
router.get("/articles", GET_ALL_ARTICLES);
router.get("/article/:id", GET_ARTICLE_BY_ID);
router.delete("/article/:id", DELETE_ARTICLE_BY_ID);

module.exports = router;
const { GetUrls, PostUrls , PostCustomUrls } = require("../controllers/url");

const router = require("express").Router()

//get all answer of a question
router.get("/:key", GetUrls);
router.post("/p", PostUrls);
router.post("/custom", PostCustomUrls);

module.exports = router;

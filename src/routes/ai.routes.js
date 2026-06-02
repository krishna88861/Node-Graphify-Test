const router = require("express").Router();
const { generateCompletion} = require("../controllers/ai.controller");

router.post("/chat", generateCompletion);

module.exports = router;
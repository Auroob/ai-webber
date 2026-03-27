const express = require("express");
const { analyzeRateLimiter } = require("../middleware/rateLimiter");
const { validateUrl } = require("../middleware/validator");
const { analyzeWebsite } = require("../services/claude");

const router = express.Router();

router.post("/", analyzeRateLimiter, validateUrl, async (req, res) => {
  const { validatedUrl } = req;
  console.log(`[Analyze] ${validatedUrl}`);
  try {
    const analysis = await analyzeWebsite(validatedUrl);
    res.json(analysis);
  } catch (err) {
    console.error(`[Analyze] Failed:`, err.message);
    res.status(500).json({ error: "Analysis failed", details: err.message });
  }
});

module.exports = router;

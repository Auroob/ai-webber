const rateLimit = require("express-rate-limit");
const analyzeRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests", details: "15 requests per 15 minutes exceeded." },
});
module.exports = { analyzeRateLimiter };

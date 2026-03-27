function validateUrl(req, res, next) {
  let { url } = req.body;
  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Missing URL", details: "A 'url' field is required." });
  }
  url = url.trim();
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  try {
    const parsed = new URL(url);
    if (!parsed.hostname || !parsed.hostname.includes(".")) throw new Error();
    req.validatedUrl = parsed.href;
    next();
  } catch {
    return res.status(400).json({ error: "Invalid URL", details: "Provide a valid URL e.g. https://example.com" });
  }
}
module.exports = { validateUrl };

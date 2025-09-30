import rateLimit from "express-rate-limit";

export const apiRateLimiter = rateLimit({
  windowMs: Number(process.env.BLOGS_API_RATE_LIMIT_WINDOW_MS) || 60 * 1000,
  max: Number(process.env.BLOGS_API_RATE_LIMIT_MAX) || 100,
  standardHeaders: true,  // adds RateLimit-* headers
  legacyHeaders: false,   // removes deprecated X-RateLimit-* headers
  message: "Too many requests, please try again later.",
});

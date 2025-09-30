import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // max requests per window
  message: 'Too many requests, try again later',
});
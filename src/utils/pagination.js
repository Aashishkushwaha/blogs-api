export const paginate = (req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  return { limit, offset };
};
// Why: Security (rate limit), scalability (pagination), JWT auth (industry standard).
// middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error caught:", err.name);

  // Handle unique constraint (duplicate entry)
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      message: err.errors?.[0]?.message || "Duplicate entry",
      field: err.errors?.[0]?.path,
      value: err.errors?.[0]?.value
    });
  }

  // Handle validation errors
  if (err.name === "SequelizeValidationError" || err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: (err.errors || err.details).map(e => ({
        field: e.path,
        message: e.message
      }))
    });
  }

  // Fallback
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
};

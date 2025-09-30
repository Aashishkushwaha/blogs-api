import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const authorization = req.headers["authorization"];
  const token = authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.BLOGS_API_JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}

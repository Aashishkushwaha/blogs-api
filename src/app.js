import dotenv from "dotenv";
dotenv.config()
import express from "express";
import helmet from "helmet";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { sequelize } from "./config/db.js";
import postRoutes from "./routes/postRoute.js";
import userRoutes from "./routes/userRoute.js";
import apiHealthRoutes from "./routes/healthRoute.js";
import commentRoutes from "./routes/commentRoute.js";
import { swaggerJSDocs } from "./swagger/v1/swagger.js";
import auth from "./middleware/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { apiRateLimiter } from "./middleware/limiter.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(apiRateLimiter);
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/posts/:postId", auth, commentRoutes);
app.use("/api/health", apiHealthRoutes);

// Swagger
app.use("/api-docs/v1", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

// centralized error handler
app.use(errorHandler);

// DB sync
sequelize.sync().then(() => console.log("DB synced"));

app.listen(process.env.BLOGS_API_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.BLOGS_API_PORT}`
  );
});

export default app;
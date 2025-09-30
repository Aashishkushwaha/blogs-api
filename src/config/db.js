import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

export const sequelize = new Sequelize(
  process.env.BLOGS_API_DB_NAME,
  process.env.BLOGS_API_DB_USER,
  process.env.BLOGS_API_DB_PASSWORD,
  {
    host: process.env.BLOGS_API_DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

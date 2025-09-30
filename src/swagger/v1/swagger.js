import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blogs API",
      description: "Node.js API created for my blogs application",
      version: "1.0.0",
    },
    servers: [{ url: `http://localhost:${process.env.BLOGS_API_PORT}` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/swagger/**/*.js"], // <-- Make sure this path points to your route files
};

export const swaggerJSDocs = swaggerJsDoc(options);

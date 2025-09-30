# 📘 Blogs API

A production-ready **REST API for blogging** built with **Node.js, Express, Sequelize, and MySQL**.  
Supports **users, posts, comments, likes, favorites, authentication, pagination, rate limiting, and Swagger documentation**.  

---

## ✨ Features

- 🔐 **User Authentication** (JWT: Register, Login, Soft Delete)  
- 📝 **Post Management** (CRUD operations)  
- 💬 **Comments** (with ownership check → users can only delete their own comments)  
- ❤️ **Likes & Favorites** on posts  
- 📜 **Soft Delete** support for users, posts, comments  
- 📊 **Pagination & Filtering** for posts  
- 🚦 **Rate Limiting** (protect API from abuse)  
- 🛡 **Security Best Practices** (Helmet, CORS, bcrypt password hashing)  
- 📑 **Swagger API Documentation** (`/api-docs`)  
- ✅ **Health Check Endpoint** (`/health`)  
- 🐳 **Dockerized Deployment** (API + MySQL)  
- 📖 **Changelog & Versioning** (`/api/v1/...`)  

---

## 📂 Project Structure
```
src/
├── config/ # DB, logger, swagger config
├── controllers/ # Request handlers
├── middlewares/ # Auth, validation, error handling, rate limiting
├── models/ # Sequelize models
├── routes/ # API routes
├── validators/ # Joi schemas
├── utils/ # Helpers (token, response)
├── app.js # Express app config (entry point)
```
---

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/blogs-api.git
cd blogs-api
```

### 2. Install Dependencies
``` npm install ```

### 3. Environment Variables

Create a .env file in project root:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=blogs
JWT_SECRET=supersecretkey
```

### 4. 🛠 Running Locally
```npm run dev```

API → http://localhost:3000/api/v1

Swagger Docs → http://localhost:3000/api-docs

Health Check → http://localhost:3000/api/v1/health

## 📑 API Endpoints

1. Users

- POST /api/v1/users/register → Register user

- POST /api/v1/users/login → Login and get JWT

- DELETE /api/v1/users/me → Soft delete user

2. Posts

- POST /api/v1/posts → Create post

- GET /api/v1/posts → Get all posts (public)

- GET /api/v1/posts/my → Get user’s own posts (requires auth)

- PUT /api/v1/posts/:id → Update post (owner only)

- DELETE /api/v1/posts/:id → Soft delete post

3. Comments

- POST /api/v1/posts/:postId/comments → Add comment

- DELETE /api/v1/posts/:postId/comments/:commentId → Delete own comment

4. Likes & Favorites

- POST /api/v1/posts/:id/like → Like post

- DELETE /api/v1/posts/:id/unlike → Unlike post

- POST /api/v1/posts/:id/favorite → Favorite post

- DELETE /api/v1/posts/:id/unfavorite → Remove favorite

## 🔒 Security

- bcrypt for password hashing

- JWT with expiry for authentication

- Helmet for secure headers

- CORS enabled for API access control

- Rate limiting to prevent abuse

## 📜 Changelog

See CHANGELOG.md for details on version history.
API follows semantic versioning → /api/v1/...
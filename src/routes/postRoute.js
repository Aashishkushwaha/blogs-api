import { Router } from "express";
import {
  createPost,
  deletePost,
  favoritePost,
  getAllPosts,
  getAllPostsForUser,
  getPostById,
  likePost,
  unlikePost,
  updatePost,
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { postSchema } from "../utils/validators/postValidator.js";

const postRouter = Router();

postRouter.get("/all", getAllPosts);

postRouter.get("/", auth, getAllPostsForUser);

postRouter.post("/", auth, validate(postSchema), createPost);

postRouter.get("/:id", auth, getPostById);

postRouter.patch("/:id", auth, validate(postSchema), updatePost);

postRouter.delete("/:id", auth, deletePost);

postRouter.post("/:id/like", auth, likePost);

postRouter.post("/:id/favorite", auth, favoritePost);

postRouter.delete("/:id/unlike", auth, unlikePost);

export default postRouter;

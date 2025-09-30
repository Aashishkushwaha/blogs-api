import { Router } from "express";
import { addComment, deleteComment, getComments } from "../controllers/commentController.js";
import { validate } from "../middleware/validate.js";
import { commentSchema } from "../utils/validators/commentValidator.js";

const commentRouter = Router({ mergeParams: true });

commentRouter.route("/comments").get(getComments).post(validate(commentSchema), addComment);

commentRouter.delete("/comments/:commentId", deleteComment);

export default commentRouter;

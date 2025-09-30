import { Comment } from "../models/index.js";

export const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const {postId} = req.params;
    console.log({params: req.params})

    if (!postId)
      return res.status(400).json({ message: "Post ID is required" });

    const comment = await Comment.create({
      post_id: postId,
      user_id: req.user.id,
      content,
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getComments = async (req, res) => {
  const comments = await Comment.findAndCountAll({
    where: { post_id: req.params.postId, is_deleted: false },
  });
  res.json({ comments: comments.rows, total: comments.count });
};

export const deleteComment = async (req, res) => {
  const comment = await Comment.findOne({
    where: { id: req.params.commentId, post_id: req.params.postId },
  });

  if (!comment) return res.status(404).json({ message: "Comment not found" });

  // Check if current user is the owner
  if (comment.user_id !== req.user.id) {
    return res
      .status(403)
      .json({ message: "You can only delete your own comments" });
  }

  // Soft delete
  await comment.update({ is_deleted: true });
  res.json({ message: "Comment deleted" });
};

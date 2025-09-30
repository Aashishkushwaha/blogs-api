import { Post, Comment, PostLike, PostFavorite } from "../models/index.js";
import { paginate } from "../utils/pagination.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ user_id: req.user.id, title, content });
  res.status(201).json(post);
};

export const getAllPosts = async (req, res) => {
  const { limit, offset } = paginate(req);

  const posts = await Post.findAndCountAll({
    where: { is_deleted: false },
    limit,
    offset,
  });

  return res.json({ posts: posts.rows, totalPosts: posts.count });
};

export const getAllPostsForUser = async (req, res) => {
  const { limit, offset } = paginate(req);

  const posts = await Post.findAndCountAll({
    where: { is_deleted: false, user_id: req.user.id },
    limit,
    offset,
  });

  return res.json({ posts: posts.rows, totalPosts: posts.count });
};

export const getPostById = async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
      is_deleted: false,
      user_id: req.user.id,
    },
    include: [Comment],
  });
  if (!post) return res.status(404).json({ message: "Post not found" });
  return res.json(post);
};

export const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findOne({ where: { id: req.params.id, user_id: req.user.id } });
  if (!post) return res.status(404).json({ message: 'Post not found' });
  await post.update({ title, content });
  return res.json(post);
};

export const deletePost = async(req, res) => {
  const {id} = req.params;
  const post = await Post.findOne({ where: { id, user_id: req.user.id }});
  if (!post) return res.status(404).json({ message: 'Post not found' });
  await post.update({ is_deleted: true });
  return res.json({ message: 'Post soft deleted successfully.'})
}

export const likePost = async (req, res) => {
  const {id} = req.params;
  const post = await Post.findOne({ where: { id, user_id: req.user.id }});
  console.log({post})
  if (!post) return res.status(404).json({ message: 'Post not found' });

  const [_, created] = await PostLike.findOrCreate({ where: { user_id: req.user.id, post_id: req.params.id } });
  res.json({ message: created ? 'Post liked' : 'Already liked' });
};

export const unlikePost = async (req, res) => {
  try {
    const deleted = await PostLike.destroy({
      where: {
        user_id: req.user.id,
        post_id: req.params.id,
      },
    });

    if (deleted) {
      return res.json({ message: "Post unliked" });
    } else {
      return res.status(404).json({ message: "Like not found" });
    }
  } catch (error) {
    console.error("Error unliking post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const favoritePost = async (req, res) => {
  const {id} = req.params;
  const post = await Post.findOne({ where: { id, user_id: req.user.id }});
  if (!post) return res.status(404).json({ message: 'Post not found' });
  const [_, created] = await PostFavorite.findOrCreate({ where: { user_id: req.user.id, post_id: req.params.id } });
  res.json({ message: created ? 'Post marked as favorite' : 'Post was already marked post favorite' });
};

import { User } from "./User.js";
import { Post } from "./Post.js";
import { Comment } from "./Comment.js";
import { PostLike } from "./PostLike.js";
import { PostFavorite } from "./PostFavorite.js";

// 1 User -> M Posts
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

// 1 User -> M Comments
User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

// 1 Post -> M Comments
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

// M User -> Like M Posts
User.belongsToMany(Post, {
  through: PostLike,
  as: "LikedPosts",
  foreignKey: "user_id",
});
Post.belongsToMany(User, {
  through: PostLike,
  as: "LikedBy",
  foreignKey: "post_id",
});

// M User -> Favorites M Posts
User.belongsToMany(Post, {
  through: PostFavorite,
  as: "FavoritedPosts",
  foreignKey: "user_id",
});
Post.belongsToMany(User, {
  through: PostFavorite,
  as: "FavoritedBy",
  foreignKey: "post_id",
});

export { User, Post, Comment, PostLike, PostFavorite };

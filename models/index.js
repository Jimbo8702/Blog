const User = require("./User.js");
const Post = require("./post.js");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Post,
};

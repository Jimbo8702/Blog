const { Post } = require("../models");

const postData = [
  {
    post_text: "I love coding!",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

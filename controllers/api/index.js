const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

//api/users
router.use("/users", userRoutes);
//api/posts
router.use("/posts", postRoutes);

module.exports = router;

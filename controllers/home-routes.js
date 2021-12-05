const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth.js");

// The '/' endpoint - brings you to landing page
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create - brings you to create page
router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//homepage - brings you to home page
router.get("/login", async (req, res) => {
  try {
    res.render("login", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//renders addpost page
router.get("/post", withAuth, async (req, res) => {
  res.render("post", {
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;

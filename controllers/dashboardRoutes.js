const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, User } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log("err");
    res.redirect("login");
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("new-post");
});

router.get("/edit/:postid", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.postid);

    if (!postData) res.status(404);

    const post = postData.get({ plain: true });

    res.render("edit-post", { post, logged_in: req.session.logged_in });
  } catch (error) {
    console.log(error);
    res.redirect("login");
  }
});

module.exports = router;

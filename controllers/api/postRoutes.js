const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();
    if (!postData) {
      res.status(400).json({ message: "Failed to fetch posts!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });
    if (!postData) {
      res.status(400).json({ message: "Failed to post!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedPosts] = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if (!affectedPosts || affectedPosts == 0) {
      res.status(400).json({ message: "Failed to edit post!" });
      return;
    }
    res.status(200).json(affectedPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, (req, res) => {
  try {
    const [affectedPosts] = Post.destroy({ where: { id: req.params.id } });
    if (!affectedPosts || affectedPosts == 0) {
      res.status(400).json({ message: "Failed to delete post!" });
      return;
    }
    res.status(200).json(affectedPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

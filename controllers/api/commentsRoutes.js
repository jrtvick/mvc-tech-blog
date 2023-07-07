const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req,res) => {
    try {
        const commentsData = await Comment.create({...req.body, user_id: req.session.user_id});
        if (!commentsData) {
            res.status(400)
            .json({ message: "Failed to comment!" });
            return;
        }
        res.status(200).json(commentsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
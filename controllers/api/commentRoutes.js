const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const addNewComment = await Comment.create({
      blog_id: req.body.blog_id,
      comment_content: req.body.comment_content,
      user_id: req.session.user_id,
    });

    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newBlog = await Blog.create({
      name: req.body.blogName,
      description: req.body.blogDescription,
      user_id: req.session.user_id,
    });
    console.log(newBlog);
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);

    const name = req.body.blogName;
    const description = req.body.blogDescription;
    const blog_id = req.params.id;

    const updatedBlog = await Blog.update(
      { name, description },
      { where: { id: blog_id } }
    );
    if (!updatedBlog) {
      res
        .status(404)
        .send("Ooops! The Blog you're trying to update does not exist.");
    }
    res.status(200);
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(errorMessage500);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog with this ID exists" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

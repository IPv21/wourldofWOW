const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });

        const blogPost = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('profile', {blofPosts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/:id', withAuth, async (req, res) => {
   try {
    const blogData= await Blog.findByPk(req.params.id, {
        include: [
            {
                model: Comment,
                include: [User]
                
            },
            {
                model: User
            }
        ]
    });
    if (!blogData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
    }
    const blogPost = blogData.get({ plain: true });
    res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const blog = await Blog.destroy({
          where: {
              id: req.params.id
          }
      });

      if (!blog) {
          res.status(404).json({ message: 'No blog found with this id!' });
          return;
      }

      res.status(200).json(blog);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

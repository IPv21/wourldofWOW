const router = require('express').Router();

// Import routes
const userRoutes = require('.userRoutes');
const blogPostRoutes = require('/blogPostRoutes');
const signup = require("./signup");
const comment = require("./comment");
const profile = require("./profile");
// Define the routes usage
router.use('/', userRoutes); 
router.use('/posts', blogPostRoutes); 
router.use('/signup', signup);
router.use("/comment", comment);
router.use("/profile", profile);
module.exports = router;

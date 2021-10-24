var express = require('express');
var router = express.Router();
const authMiddleware = require('../util/authenticate');
const blogController = require('../controllers/blogs');

/* GET home page. */
router.route('/')
.get(authMiddleware, async(req, res) => {
  const result = await blogController.getBlogs(req)
  if(result){
    res.json(result);
  }
})
.post(authMiddleware, async(req,res) => {
  const result = await blogController.createBlog(req)
  if(result){
    res.json(result);
  }
})

module.exports = router;

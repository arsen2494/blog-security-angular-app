const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost } = require('../controllers/posts');

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);

module.exports = router;

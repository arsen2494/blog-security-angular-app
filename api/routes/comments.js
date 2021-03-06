const express = require('express');
const router = express.Router();
const {createComment, getComments} = require('../controllers/comments');

router.post('/', createComment);
router.get('/', getComments);

module.exports = router;

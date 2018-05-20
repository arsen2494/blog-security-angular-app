const Comment = require('../models/comment');
const Post = require('../models/post');

exports.createComment = function (req, res) {
  Post.findById(req.body.postId, (err, post) => {
    if (err) return res.status(400).send(err);
    if (!post) return res.status(404).send('Can not find post.');
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
      if (err) return res.status(400).send(err);
      res.status(201).json(comment);
    });
  });
};

exports.getComments = function (req, res) {
  const postId = req.query.postId;
  const condition = postId ? {postId} : {};

  Comment.find(condition, (err, comments) => {
    if (err) return res.status(400).send(err);
    res.status(200).json(comments);
  });
};

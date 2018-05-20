const Post = require('../models/post');

exports.createPost = function (req, res) {
    const post = new Post(req.body);
    post.save((err, post) => {
        if (err) return res.status(400).send(err);
        res.status(201).json(post);
    });
};

exports.getPosts = function (req, res) {
    Post.find({}, (err, posts) => {
        if (err) return res.status(400).send(err);
        res.status(200).json(posts);
    });
};

exports.getPost = function (req, res) {
    Post.findById(req.params.id, (err, post) => {
        if (err) return res.status(400).send(err);
        if (!post) return res.status(404).send('Post not found.');
        res.status(200).json(post);
    });
};

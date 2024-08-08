// Create web server
// Create a comment
// Read all comments
// Read a comment by id
// Update a comment
// Delete a comment

// Import express
const express = require('express');
// Import router
const router = express.Router();
// Import Comment model
const Comment = require('../models/comment');

// Create a comment
router.post('/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save().then(() => {
        res.send(comment);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

// Read all comments
router.get('/comments', (req, res) => {
    Comment.find({}).then((comments) => {
        res.send(comments);
    }).catch((error) => {
        res.status(500).send(error);
    });
});

// Read a comment by id
router.get('/comments/:id', (req, res) => {
    const _id = req.params.id;
    Comment.findById(_id).then((
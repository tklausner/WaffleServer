const Comment = require("../models/comment");

// COMMENT CONTROLLER

const fetchComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return comments;
  } catch (err) {
    console.log(err);
  }
};

const fetchCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    return comment;
  } catch (err) {
    console.log(err);
  }
};

const fetchCommentByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const comment = await Comment.find({ user_id: user_id });
    return comment;
  } catch (err) {
    console.log(err);
  }
};

const addComment = async (req, res) => {
  try {
    const NewComment = new Comment({ ...req.body });
    return NewComment.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const comment = await Comment.findByIdAndRemove(id);
    return comment;
  } catch (err) {
    console.log(err);
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, comment, {
      new: true,
    });
    return updatedComment;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchComments,
  fetchCommentById,
  fetchCommentByUser,
  addComment,
  deleteComment,
  updateComment,
};
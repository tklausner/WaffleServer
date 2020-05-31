const Post = require("../models/post");

// POST CONTROLLER

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (req, res) => {
  try {
    const NewPost = new Post({ ...req.body });
    return NewPost.save();
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const post = await Post.findByIdAndRemove(id);
    return post;
  } catch (err) {
    console.log(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedPost;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchPosts, addPost, deletePost, updatePost };

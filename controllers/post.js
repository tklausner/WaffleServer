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
    console.log("{BACKEND}", post);
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedPost;
  } catch (err) {
    console.log(err);
  }
};

const fetchPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.findById(id);
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await Post.find({ category: category }, "category image");
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchPostsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const posts = await Post.find({ user_id: user_id });
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchWaffleWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const { wafflers } = await Post.findById(id);
    const size = wafflers.length;
    if (size < 1) {
      console.log("ERROR: WAFFLERS IS NULL");
      return null;
    }
    let r = Math.floor(Math.random() * size);
    console.log("WAF", wafflers[r]);
    return wafflers[r];
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
  fetchPostById,
  fetchPostsByCategory,
  fetchPostsByUser,
  fetchWaffleWinner,
};

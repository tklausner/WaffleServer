// Load required packages
var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  content: String,
});

// Define POST SCHEMA
var PostSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  category: String,
  profile: { type: String },
  image: { type: String },
  description: String,
  value: Number,
  waffles_remaining: Number,
  comments: [CommentSchema],
});

// Export the Mongoose model
var Post = mongoose.model("Post", PostSchema);

module.exports = { Post, PostSchema };

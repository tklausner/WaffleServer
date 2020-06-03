// Load required packages
var mongoose = require("mongoose");

const { CommentSchema } = require("./comment");
const root = "";

// Define POST SCHEMA
var PostSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  category: String,
  profile: { type: String, get: (v) => `${root}${v}` },
  image: { type: String, get: (v) => `${root}${v}` },
  description: String,
  value: Number,
  waffles_remaining: Number,
  comments: [CommentSchema],
});

// Export the Mongoose model
var Post = mongoose.model("Post", PostSchema);

module.exports = { Post, PostSchema };

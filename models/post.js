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
  category: { type: String, default: "none" },
  image: { type: String },
  profile: { type: String },
  description: String,
  value: { type: Number, default: 0 },
  waffles_remaining: { type: Number, default: 0 },
  comments: [CommentSchema],
});

// Export the Mongoose model

module.exports = mongoose.model("Post", PostSchema);

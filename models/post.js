// Load required packages
var mongoose = require("mongoose");

// Define POST SCHEMA
var PostSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  profile: { type: String },
  image: { type: String },
  description: String,
  value: Number,
  waffles_remaining: Number,
  comments: [CommentSchema],
});

var CommentSchema = new mongoose.Schema({
  post_id: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  user_id: String,
  username: String,
  content: String,
});

// Export the Mongoose model
module.exports = mongoose.model("Post", PostSchema);

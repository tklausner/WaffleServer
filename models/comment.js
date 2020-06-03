// Load required packages
var mongoose = require("mongoose");

// Define COMMENT SCHEMA
var CommentSchema = new mongoose.Schema({
  post_id: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  username: String,
  content: String,
});

var Comment = mongoose.model("Comment", CommentSchema);

// Export the Mongoose model
module.exports = { Comment, CommentSchema };

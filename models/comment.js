// Load required packages
var mongoose = require("mongoose");

// Define COMMENT SCHEMA
var CommentSchema = new mongoose.Schema({
  post_id: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  user_id: String,
  username: String,
  content: String,
});
// Export the Mongoose model
module.exports = mongoose.model("Comment", CommentSchema);

// Load required packages
var mongoose = require("mongoose");

// Define COMMENT SCHEMA
var CommentSchema = new mongoose.Schema({
  username: String,
  content: String,
});

// Export the Mongoose model
module.exports = mongoose.model("Comment", CommentSchema);

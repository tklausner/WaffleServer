// Load required packages
var mongoose = require("mongoose");

const Post = require("./post");

// Define USER SCHEMA
var UserSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  saved: { type: [Post] },
  store: { type: [Post] },
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);

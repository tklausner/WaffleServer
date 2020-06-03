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
});

// Export the Mongoose model
module.exports = mongoose.model("Post", PostSchema);

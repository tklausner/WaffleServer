// Load required packages
var mongoose = require("mongoose");

const root = "";

// Define POST SCHEMA
var PostSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  profile: { type: String, get: (v) => `${root}${v}` },
  image: { type: String, get: (v) => `${root}${v}` },
  description: String,
  value: Number,
  waffles_remaining: Number,
});

// Export the Mongoose model
module.exports = mongoose.model("Post", PostSchema);

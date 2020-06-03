// Load required packages
var mongoose = require("mongoose");

const { PostSchema } = require("./post");

// Define USER SCHEMA
var UserSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  saved: { type: [PostSchema] },
  store: { type: [PostSchema] },
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);

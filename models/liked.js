// Load required packages
var mongoose = require("mongoose");

// Define LIKED SCHEMA
var LikedSchema = new mongoose.Schema({
  user_id: String,
  posts: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
});

// Export the Mongoose model
module.exports = mongoose.model("Liked", LikedSchema);

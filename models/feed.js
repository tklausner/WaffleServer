// Load required packages
var mongoose = require("mongoose");

// Define FEED SCHEMA
var FeedSchema = new mongoose.Schema({
  user_id: String,
  posts: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
});

// Export the Mongoose model
module.exports = mongoose.model("Feed", FeedSchema);

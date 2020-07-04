// Load required packages
var mongoose = require("mongoose");

// Define POST SCHEMA
var PostSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  category: { type: String, default: "none" },
  image: { type: String },
  profile: { type: String },
  description: String,
  comments: { type: [mongoose.Schema.Types.ObjectId], ref: "Comment" },
  value: { type: Number, default: 0 },
  main_spots: { type: Number, default: 0 },
  main_price: { type: Number, default: 0 },
  waffles_remaining: { type: Number, default: 0 },
});

// Export the Mongoose model

module.exports = mongoose.model("Post", PostSchema);

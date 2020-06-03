// Load required packages
var mongoose = require("mongoose");

// Define EXPLORE SCHEMA
var ExploreSchema = new mongoose.Schema({
  user_id: String,
  most_visited: [String],
  category_list: [String],
});

// Export the Mongoose model
module.exports = mongoose.model("Explore", ExploreSchema);

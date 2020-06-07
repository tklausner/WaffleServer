// Load required packages
var mongoose = require("mongoose");

// Define USER SCHEMA
var UserSchema = new mongoose.Schema({
  fb_id: String,
  username: String,
  first_name: String,
  last_name: String,
  saved: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  store: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);

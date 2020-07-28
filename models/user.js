// Load required packages
var mongoose = require("mongoose");

// Define USER SCHEMA
var UserSchema = new mongoose.Schema({
  fb_id: String,
  username: String,
  first_name: String,
  last_name: String,
  profile: String,
  p_code: String,
  i_code: String,
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);

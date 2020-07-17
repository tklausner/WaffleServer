// Load required packages
var mongoose = require("mongoose");

var ReviewSchema = new mongoose.Schema({
  user_id: String,
  rating: Number,
  content: String,
});

var ReceiptSchema = new mongoose.Schema({
  user_id: String,
  post_id: String,
  amount_paid: Number,
  total_price: Number,
});

// Define USER SCHEMA
var UserSchema = new mongoose.Schema({
  fb_id: String,
  username: String,
  first_name: String,
  last_name: String,
  profile: String,
  store_description: String,
  saved: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  store: { type: [mongoose.Schema.Types.ObjectId], ref: "Post" },
  waffles: {
    type: [{ id: mongoose.Schema.Types.ObjectId, spots: Number }],
    ref: "Post",
  },
  reviews: { type: [ReviewSchema] },
  receipts: { type: [ReceiptSchema] },
  token: String,
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);

// Load required packages
var mongoose = require("mongoose");

// Define PAYMENT SCHEMA
var PaymentSchema = new mongoose.Schema({
  user_id: String,
  balance: Number,
});

// Export the Mongoose model

module.exports = mongoose.model("Payment", PaymentSchema);

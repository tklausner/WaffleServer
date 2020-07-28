// Load required packages
var mongoose = require("mongoose");

// Define GIVEAWAY SCHEMA
var GiveawaySchema = new mongoose.Schema({
  users: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
});

// Export the Mongoose model
module.exports = mongoose.model("Giveaway", GiveawaySchema);

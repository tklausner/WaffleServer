const Feed = require("../models/feed");

// FEED CONTROLLER

const fetchFeeds = async (req, res) => {
  try {
    const feeds = await Feed.find();
    return feeds;
  } catch (err) {
    console.log(err);
  }
};

const fetchFeedById = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);
    return feed;
  } catch (err) {
    console.log(err);
  }
};

const addFeed = async (req, res) => {
  try {
    const NewFeed = new Feed({ ...req.body });
    return NewFeed.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteFeed = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const feed = await Feed.findByIdAndRemove(id);
    return feed;
  } catch (err) {
    console.log(err);
  }
};

const updateFeed = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = req.body;
    const updatedFeed = await Feed.findByIdAndUpdate(id, feed, {
      new: true,
    });
    return updatedFeed;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchFeeds, fetchFeedById, addFeed, deleteFeed, updateFeed };

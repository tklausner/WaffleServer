const Explore = require("../models/explore");

// EXPLORE CONTROLLER

const fetchExplores = async (req, res) => {
  try {
    const explores = await Explore.find();
    return explores;
  } catch (err) {
    console.log(err);
  }
};

const fetchExploreById = async (req, res) => {
  try {
    const { id } = req.params;
    const explore = await Explore.findById(id);
    return explore;
  } catch (err) {
    console.log(err);
  }
};

const addExplore = async (req, res) => {
  try {
    const NewExplore = new Explore({ ...req.body });
    return NewExplore.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteExplore = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const explore = await Explore.findByIdAndRemove(id);
    return explore;
  } catch (err) {
    console.log(err);
  }
};

const updateExplore = async (req, res) => {
  try {
    const { id } = req.params;
    const explore = req.body;
    const updatedExplore = await Explore.findByIdAndUpdate(id, explore, {
      new: true,
    });
    return updatedExplore;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchExplores,
  fetchExploreById,
  addExplore,
  deleteExplore,
  updateExplore,
};

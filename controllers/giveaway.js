const Giveaway = require("../models/giveaway");

// USER CONTROLLER

const fetchGiveaways = async (req, res) => {
  try {
    const giveaways = await Giveaway.find();
    return giveaways;
  } catch (err) {
    console.log(err);
  }
};

const fetchGiveawayById = async (req, res) => {
  try {
    const { id } = req.params;
    const giveaway = await Giveaway.findById(id);
    return giveaway;
  } catch (err) {
    console.log(err);
  }
};

const addGiveaway = async (req, res) => {
  try {
    const NewGiveaway = new Giveaway({ ...req.body });
    return NewGiveaway.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteGiveaway = async (req, res) => {
  try {
    const { id } = req.params;
    const giveaway = await Giveaway.findByIdAndRemove(id);
    return giveaway;
  } catch (err) {
    console.log(err);
  }
};

const updateGiveaway = async (req, res) => {
  try {
    const { id } = req.params;
    const giveaway = req.body;
    const updatedGiveaway = await Giveaway.findByIdAndUpdate(id, giveaway, {
      new: true,
    });
    return updatedGiveaway;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchGiveaways,
  fetchGiveawayById,
  addGiveaway,
  deleteGiveaway,
  updateGiveaway,
};

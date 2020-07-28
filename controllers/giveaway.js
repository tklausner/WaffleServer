const Giveaway = require("../models/giveaway");

// Giveaway CONTROLLER

const fetchGiveaways = async (req, res) => {
  try {
    const Giveaways = await Giveaway.find();
    return Giveaways;
  } catch (err) {
    console.log(err);
  }
};

const fetchGiveawayById = async (req, res) => {
  try {
    const { id } = req.params;
    const Giveaway = await Giveaway.findById(id);
    return Giveaway;
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
    const Giveaway = await Giveaway.findByIdAndRemove(id);
    return Giveaway;
  } catch (err) {
    console.log(err);
  }
};

const updateGiveaway = async (req, res) => {
  try {
    const { id } = req.params;
    const Giveaway = req.body;
    const updatedGiveaway = await Giveaway.findByIdAndUpdate(id, Giveaway, {
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

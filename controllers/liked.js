const Liked = require("../models/liked");

// LIKED CONTROLLER

const fetchLikeds = async (req, res) => {
  try {
    const likeds = await Liked.find();
    return likeds;
  } catch (err) {
    console.log(err);
  }
};

const fetchLikedById = async (req, res) => {
  try {
    const { id } = req.params;
    const liked = await Liked.findById(id);
    return liked;
  } catch (err) {
    console.log(err);
  }
};

const addLiked = async (req, res) => {
  try {
    const NewLiked = new Liked({ ...req.body });
    return NewLiked.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteLiked = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const liked = await Liked.findByIdAndRemove(id);
    return liked;
  } catch (err) {
    console.log(err);
  }
};

const updateLiked = async (req, res) => {
  try {
    const { id } = req.params;
    const liked = req.body;
    const updatedLiked = await Liked.findByIdAndUpdate(id, liked, {
      new: true,
    });
    return updatedLiked;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchLikeds,
  fetchLikedById,
  addLiked,
  deleteLiked,
  updateLiked,
};

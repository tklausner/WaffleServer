const User = require("../models/user");

// USER CONTROLLER

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
  }
};

const fetchUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const addUser = async (req, res) => {
  try {
    const NewUser = new User({ ...req.body });
    return NewUser.save();
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGE TO findOneAndDelete if id causes errors
    const user = await User.findByIdAndRemove(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    return updatedUser;
  } catch (err) {
    console.log(err);
  }
};

const fetchUserByFBId = async (req, res) => {
  try {
    const { fb_id } = req.params;
    const user = await User.find({ fb_id: fb_id });
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchUsers,
  fetchUserById,
  addUser,
  deleteUser,
  updateUser,
  fetchUserByFBId,
};

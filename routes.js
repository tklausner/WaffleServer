const {
  fetchUsers,
  fetchUserById,
  addUser,
  deleteUser,
  updateUser,
  fetchUserByFBId,
} = require("./controllers/user");

const {
  fetchGiveaways,
  fetchGiveawayById,
  addGiveaway,
  deleteGiveaway,
  updateGiveaway,
} = require("./controllers/giveaway");

// ALL API ROUTES

const routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: fetchUsers,
  },
  {
    method: "POST",
    url: "/api/users",
    handler: addUser,
  },
  {
    method: "DELETE",
    url: "/api/users/:id",
    handler: deleteUser,
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: updateUser,
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: fetchUserById,
  },
  {
    method: "GET",
    url: "/api/users/fb/:fb_id",
    handler: fetchUserByFBId,
  },
  {
    method: "GET",
    url: "/api/giveaways",
    handler: fetchGiveaways,
  },
  {
    method: "POST",
    url: "/api/giveaways",
    handler: addGiveaway,
  },
  {
    method: "DELETE",
    url: "/api/giveaways/:id",
    handler: deleteGiveaway,
  },
  {
    method: "PUT",
    url: "/api/giveaways/:id",
    handler: updateGiveaway,
  },
  {
    method: "GET",
    url: "/api/giveaways/:id",
    handler: fetchGiveawayById,
  },
];

module.exports = routes;

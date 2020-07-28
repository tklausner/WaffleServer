const {
  fetchUsers,
  fetchUserById,
  addUser,
  deleteUser,
  updateUser,
  fetchUserByFBId,
} = require("./controllers/user");

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
];

module.exports = routes;

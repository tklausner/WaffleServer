const {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
  fetchPostById,
  fetchPostsByCategory,
} = require("./controllers/post");

const {
  fetchUsers,
  fetchUserById,
  addUser,
  deleteUser,
  updateUser,
} = require("./controllers/user");

const {
  fetchFeeds,
  fetchFeedById,
  addFeed,
  deleteFeed,
  updateFeed,
} = require("./controllers/user");

// ALL API ROUTES

const routes = [
  {
    method: "GET",
    url: "/api/posts",
    handler: fetchPosts,
  },
  {
    method: "POST",
    url: "/api/posts",
    handler: addPost,
  },
  {
    method: "DELETE",
    url: "/api/posts/:id",
    handler: deletePost,
  },
  {
    method: "PUT",
    url: "/api/posts/:id",
    handler: updatePost,
  },
  {
    method: "GET",
    url: "/api/posts:id",
    handler: fetchPostById,
  },
  {
    method: "GET",
    url: "/api/posts:category",
    handler: fetchPostsByCategory,
  },
  {
    method: "GET",
    url: "/api/user",
    handler: fetchUsers,
  },
  {
    method: "GET",
    url: "/api/user/:id",
    handler: fetchUserById,
  },
  {
    method: "POST",
    url: "/api/user",
    handler: addUser,
  },
  {
    method: "DELETE",
    url: "/api/user/:id",
    handler: deleteUser,
  },
  {
    method: "PUT",
    url: "/api/user/:id",
    handler: updateUser,
  },
  {
    method: "GET",
    url: "/api/feed",
    handler: fetchFeeds,
  },
  {
    method: "GET",
    url: "/api/feed/:id",
    handler: fetchFeedById,
  },
  {
    method: "POST",
    url: "/api/feed",
    handler: addFeed,
  },
  {
    method: "DELETE",
    url: "/api/feed/:id",
    handler: deleteFeed,
  },
  {
    method: "PUT",
    url: "/api/feed/:id",
    handler: updateFeed,
  },
];

module.exports = routes;

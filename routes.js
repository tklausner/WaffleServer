const {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
} = require("./controllers/post");

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
];

module.exports = routes;

const {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
  fetchPostById,
  fetchPostsByCategory,
} = require("./controllers/post");

const {
  fetchExplores,
  fetchExploreById,
  addExplore,
  deleteExplore,
  updateExplore,
} = require("./controllers/explore");

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
    url: "/api/posts/:id",
    handler: fetchPostById,
  },
  {
    method: "GET",
    url: "/api/posts/category/:category",
    handler: fetchPostsByCategory,
  },
  {
    method: "GET",
    url: "/api/explore",
    handler: fetchExplores,
  },
  {
    method: "POST",
    url: "/api/explore",
    handler: addExplore,
  },
  {
    method: "DELETE",
    url: "/api/explore/:id",
    handler: deleteExplore,
  },
  {
    method: "PUT",
    url: "/api/explore/:id",
    handler: updateExplore,
  },
  {
    method: "GET",
    url: "/api/explore/:id",
    handler: fetchExploreById,
  },
];

module.exports = routes;

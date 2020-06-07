const {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
  fetchPostById,
  fetchPostsByCategory,
  fetchPostsByUser,
} = require("./controllers/post");

const {
  fetchExplores,
  fetchExploreById,
  addExplore,
  deleteExplore,
  updateExplore,
  fetchExploreByUser,
} = require("./controllers/explore");

const {
  fetchFeeds,
  fetchFeedById,
  addFeed,
  deleteFeed,
  updateFeed,
  fetchFeedByUser,
} = require("./controllers/feed");

const {
  fetchLikeds,
  fetchLikedById,
  addLiked,
  deleteLiked,
  updateLiked,
  fetchLikedByUser,
} = require("./controllers/liked");

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
    url: "/api/posts/user/:user_id",
    handler: fetchPostsByUser,
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
  {
    method: "GET",
    url: "/api/explore/user/:user_id",
    handler: fetchExploreByUser,
  },
  {
    method: "GET",
    url: "/api/feed",
    handler: fetchFeeds,
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
  {
    method: "GET",
    url: "/api/feed/:id",
    handler: fetchFeedById,
  },
  {
    method: "GET",
    url: "/api/feed/user/:user_id",
    handler: fetchFeedByUser,
  },
  {
    method: "GET",
    url: "/api/liked",
    handler: fetchLikeds,
  },
  {
    method: "POST",
    url: "/api/liked",
    handler: addLiked,
  },
  {
    method: "DELETE",
    url: "/api/liked/:id",
    handler: deleteLiked,
  },
  {
    method: "PUT",
    url: "/api/liked/:id",
    handler: updateLiked,
  },
  {
    method: "GET",
    url: "/api/liked/:id",
    handler: fetchLikedById,
  },
  {
    method: "GET",
    url: "/api/liked/user/:user_id",
    handler: fetchLikedByUser,
  },
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

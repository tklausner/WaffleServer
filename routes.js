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
  fetchLikeds,
  fetchLikedById,
  addLiked,
  deleteLiked,
  updateLiked,
} = require("./controllers/liked");

const {
  fetchFeeds,
  fetchFeedById,
  addFeed,
  deleteFeed,
  updateFeed,
} = require("./controllers/feed");

const {
  fetchComments,
  fetchCommentById,
  fetchCommentByUser,
  addComment,
  deleteComment,
  updateComment,
} = require("./controllers/comment");

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
    url: "/api/posts/:category",
    handler: fetchPostsByCategory,
  },
  {
    method: "GET",
    url: "/api/users",
    handler: fetchUsers,
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: fetchUserById,
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
  {
    method: "GET",
    url: "/api/liked",
    handler: fetchLikeds,
  },
  {
    method: "GET",
    url: "/api/liked/:id",
    handler: fetchLikedById,
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
    url: "/api/comments",
    handler: fetchComments,
  },
  {
    method: "GET",
    url: "/api/comments/:id",
    handler: fetchCommentById,
  },
  {
    method: "GET",
    url: "/api/comments/:user_id",
    handler: fetchCommentByUser,
  },
  {
    method: "POST",
    url: "/api/comments",
    handler: addComment,
  },
  {
    method: "DELETE",
    url: "/api/comments/:id",
    handler: deleteComment,
  },
  {
    method: "PUT",
    url: "/api/comments/:id",
    handler: updateComment,
  },
  {
    method: "GET",
    url: "/api/explore",
    handler: fetchExplores,
  },
  {
    method: "GET",
    url: "/api/explore/:id",
    handler: fetchExploreById,
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
];

module.exports = routes;

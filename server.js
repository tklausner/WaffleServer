const mongoose = require("mongoose");
const fastify = require("fastify")();
const path = require("path");
const routes = require("./routes");

require("dotenv").config();

//connect to mongodb atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log("MongoDB could not be connected due to ", e));

fastify.register(require("fastify-cors"), {
  origin: true,
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Origin", "Authorization", "Accept"],
});

//handles GET / request
fastify.get("/", async (request, res) => {
  try {
    return { message: "Waffle Server is Online" };
  } catch (e) {
    console.log(e);
  }
});

//iterating over all the routes and registering them with fastify
routes.forEach((route) => fastify.route(route));

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`);
});

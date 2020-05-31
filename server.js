const mongoose = require("mongoose");
const fastify = require("fastify")();
const path = require("path");
const routes = require("./routes");

const {
  parsed: { MONGO_ATLAS_PW, MONGO_ATLAS_UN },
} = require("dotenv").config();

//connect to mongodb atlas

mongoose
  .connect(
    `mongodb+srv://${MONGO_ATLAS_UN}:${MONGO_ATLAS_PW}@wafflecluster-u8a3o.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log("MongoDB could not be connected due to ", e));

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

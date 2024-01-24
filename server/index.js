const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
// const { ApolloServer, gql } = require("apollo-server-express");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });
app.use(cors());

// Middleware to handle CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, console.log(`> Server is rinning on PORT: ${port}`));

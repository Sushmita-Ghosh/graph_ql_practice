const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");

async function startServer() {
  const app = express(); // created an express app

  const server = new ApolloServer({
    typeDefs: `
            type Todo {
                id: ID!
                title: String!
                completed: Boolean
            }

            type Query {
                getTodos: [Todo]
            }
        `,
  }); // created a apollo server

  // added middleware
  app.use(bodyParser.json());
  app.use(cors());

  // starting the server
  await server.start();

  // if any request is made to /graphql, it will hit the express middleware
  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
}

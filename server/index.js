const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const axios = require("axios");

async function startServer() {
  const app = express(); // created an express app

  // created a apollo server
  const server = new ApolloServer({
    typeDefs: `
            type User {
                id: ID!
                name: String!
                email: String!
                username: String!
                phone: String!
                website: String!
            }
            type Todo {
                id: ID!
                userId: ID!
                title: String!
                completed: Boolean              
                user: User
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!): User 
            }
        `,

    resolvers: {
      // if anyone is trying to find an User who created a Todo
      Todo: {
        user: async (todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        getTodos: async () =>
          // generally here we will do database queries and return the data
          (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

        getAllUsers: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,

        getUser: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
      },
    },
  });

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

startServer();

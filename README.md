# GRAPHQL

- GraphQL is an alternative to REST API. In rest api - we fetch our data through different methods and there are lot of endpoints. But with graph ql we have a single endpoint - and we customize what we want on the frontend.

- GraphQL mainly solves two major problems that we face in REST API:
  - **OverFeching:** Suppose we need to fetch a user with an id of 123 from server - and suppose we only need the firstname and id from backend , but whenever we make a request from api - we will get all the redundent info from server - which is not required.
  - **UnderFetching:** Suppose a user wants email info and no of quotes of user - we make two api requests - one to the /user/:userID & other to /quotes/:userID - Since these are two diff entities we have to make the two requests. This is underfetching.

### REST VS GRAPHQL:

![image](https://github.com/Sushmita-Ghosh/graph_ql_practice/assets/82622059/cfc3798c-222a-4719-9ea9-0851b6d81e37)

### TERMINOLOGIES:

1. Query: fetch data
2. Mutation; :- to post/update / del data
3. Resolver: has logic to handle query / mutation operation

### APOLLOSERVER:

- Apollo is a framework which helps us run Graphql server

- ApolloServer takes in two things

```javascript
const server = new ApolloServer({});
```

- typeDefs which is a string --> we can define the schemas here

```js
const server = new ApolloServer({
  typeDefs: `
            type Todo {
                id: ID!
                title: String!
                completed: boolean
            }
        `,
});
```

- typeDef takes in one more thing called Query

* whenever we need to fetch something from graphql server it is called querying and if want to send something to the graphql server it is called mutation.

- All the logic is written inside resolvers

- How to launch : http://localhost:8000/graphql

- `getUser(id: ID!): User` - It means give a User with type(id = ID) and it will return an User that matches

### APOLLO CLIENT:

- Apollo Client caches the data that is returned from the server - when an graph ql api request is made, so we do not have to make the same network request again.

- Apollo CLient is used in frontend/ client side. [REF](https://www.apollographql.com/docs/react/get-started/)

- have to create an instance of `ApolloCLient`

- ```ApolloProvider`````` is like Context Provider - helps the client to be accessible anywhere in the app.

- `useQuery` is a hook which takes in our graphql query and returns data, error, loading etc

[YT](https://www.youtube.com/watch?v=NNNcoWZ6Ih0&list=PLB97yPrFwo5i9zDrWfvkohPec3Q6EEC9J)

[YT](https://www.youtube.com/watch?v=WtkKwO1viI8&t=349s)

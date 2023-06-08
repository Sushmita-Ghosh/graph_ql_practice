# GRAPHQL

* GraphQL is an alternative to REST API. In rest api - we fetch our data through different methods and there are lot of endpoints. But with graph ql we have a single endpoint - and we customize what we want on the frontend.

* GraphQL mainly solves two major problems that we face in REST API:


      * OverFeching: Suppose we need to fetch a user with an id of 123 from server - and suppose we only need the firstname and id from backend , but whenever we make a request from api - we will get all the redundent info from server - which is not required.


      * UnderFetching: Suppose a user wants email info and no of quotes of user - we make two api requests - one to the /user/:userID & other to /quotes/:userID - Since these are two diff entities we have to make the two requests. This is underfetching.


### REST VS GRAPHQL:

![image](https://github.com/Sushmita-Ghosh/graph_ql_practice/assets/82622059/cfc3798c-222a-4719-9ea9-0851b6d81e37)

### TERMINOLOGIES:
1. Query: fetch data
2. Mutation; :- to post/update / del data
3. Resolver: has logic to handle query / mutation operation


[YT](https://www.youtube.com/watch?v=NNNcoWZ6Ih0&list=PLB97yPrFwo5i9zDrWfvkohPec3Q6EEC9J)

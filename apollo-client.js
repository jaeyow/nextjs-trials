import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: 'http://localhost:4000', // local dev
    uri: 'https://kc4uqd938e.execute-api.us-east-1.amazonaws.com/dev/graphql', // F1 apollo graphql lambda
    connectToDevTools: true,
    cache: new InMemoryCache(),
  });

export default client;

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client"; 


  const appolloClient = new ApolloClient({
    uri: 'http://localhost:5000/api',
    cache: new InMemoryCache()
  });

  export default appolloClient;
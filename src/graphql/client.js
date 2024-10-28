import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.71.202:5000/api/repositories',
  cache: new InMemoryCache(),
});

export default client;

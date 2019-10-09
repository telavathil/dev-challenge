import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { AsyncStorage } from 'react-native';
import { persistCache } from 'apollo-cache-persist';

// note: this may not work on android, you will probably have to put your IP address here
const hostAddress = process.env.IP_ADDRESS || 'localhost';
const address = `http://${hostAddress}:5000/graphql`;
console.log(address);

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: AsyncStorage
});

export default new ApolloClient({
  uri: address,
  cache
});

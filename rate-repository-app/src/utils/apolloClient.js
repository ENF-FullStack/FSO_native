import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { apolloUri } = `http://${Constants.manifest?.extra}:4000/graphql`

const httpLink = createHttpLink({
    // uri: `http://${Constants.manifest?.extra.apolloUri}:4000/graphql`,
    uri: apolloUri,
});

// const createApolloClient = () => {
//     return new ApolloClient({
//         link: httpLink,
//         cache: new InMemoryCache(),
//     });
// };

const createApolloClient = (authStorage) => {
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (error) {
            console.log(error);
            return {
                headers,
            };
        }
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
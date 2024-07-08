import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

// in dev we manage token here
const token = API_KEY;

const authLink = setContext((_, { headers }) => {
    return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } };
});

const httpLink = createHttpLink({
    uri: API_URL,
});

export const $api = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


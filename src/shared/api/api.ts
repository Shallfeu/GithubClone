import {ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache} from "@apollo/client";
import {AUTH_KEY} from "../consts/localStorage/localStorageConsts.ts";

// in dev we manage token here
// const token = API_KEY;

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(AUTH_KEY);

    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers, authorization: token ? `Bearer ${token}` : ''
        }
    }));

    return forward(operation);
})

const httpLink = createHttpLink({
    uri: API_URL,
});

export const $api = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});


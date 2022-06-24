import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rqkmnj1fk401zchi18hsae/master',
    cache: new InMemoryCache()
})
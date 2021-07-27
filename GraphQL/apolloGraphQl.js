const fetch = require('cross-fetch')
const { ApolloClient, gql, useQuery, InMemoryCache } = require('@apollo/client');
const express = require('express');
const app = express();
const port = 4040;

app.get('/:id', async (req, res) => {
    const client = await new ApolloClient({
        InMemoryCache,
        uri: 'https://c.fr8.in/v1/graphql',
    });

    const query = gql`query city($search: String, $limit: Int) {
                    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
                        id
                        name
                        is_connected_city
                    }
                }`

    const variables = {
        search: `${req.query.name}%`,
        limit: 4
    }

    const cityDetails = async () => {
        return await client.request(query, { variables }).then(result => result.data).catch((error) => console.log(error))
    };
    res.send(await cityDetails())
    // return data;
})
app.listen(port, () => console.log('Listening'));
const { GraphQLClient, gql } = require('graphql-request');
const express = require('express');
const app = express();
const port = 7000;

const client = new GraphQLClient('https://dcore.fr8.in/v1/graphql')

app.get('/city', async (req, res) => {
    const query = gql`
        query city($search: String, $limit: Int) {
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
        return await client.request(query, variables).
        then(result => result).catch((error) => console.log(error))
    };
    res.send(await cityDetails())
    res.send(await client.request(query, variables));

})
app.listen(port, () => console.log(` Listening ${port}`));

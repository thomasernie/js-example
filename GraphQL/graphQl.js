const { GraphQLClient, gql } = require('graphql-request');
const express = require('express');
const app = express();
const port = 7000;

app.get('/:id', async (req, res) => {
    const city = new GraphQLClient('https://dcore.fr8.in/v1/graphql',)
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

    const cityDetails = async (variables) => {
        return await city.request(query, variables).then(result => result).catch((error) => console.log(error));
    };
    console.log(req.params.id);
    res.send([await cityDetails(variables)])

})

app.listen(port, () => console.log(` Listening ${port}`));



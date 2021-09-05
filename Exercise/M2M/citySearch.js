import express from 'express';
import {GraphQLClient, gql} from 'graphql-request'
const app = express();
const port = 3000;

app.get('/city', async (req, res) => {
    const response = 'https://dcore.fr8.in/v1/graphql'
    const fetch = new GraphQLClient(response)

    const querry = gql`query city($search: String, $limit: Int) {
        city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
          id
          name
          is_connected_city
        }
      }`
    
    

    const citySearch = `${req.query.name}%`;
    const variables= {
        search:citySearch,limit:5
    }
    const finalResponse = await fetch.request(querry,variables)
    res.send(finalResponse);
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})
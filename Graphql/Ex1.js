const express = require('express');
const app = express()
const {GraphQLClient, gql} = require ('graphql-request')
//bodyParser = require('body-parser');
//app.use(bodyParser.json());
const port= 1000;

app.get('/city', async(req,res) =>{
  const endpoint = 'https://dcore.fr8.in/v1/graphql';
  const graphqlClient = new GraphQLClient(endpoint)

  const query = gql`
    query city($search: String, $limit: Int) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
    id
    name
    is_connected_city
  }
}`

const city = `${req.query.name}%`
const variables = {
  search: city,
  limit:4
}
//
console.log(variables)

const data = await graphqlClient.request(query,variables)
//console.log(data)
res.send(data);
//res.send(JSON.stringify(data, undefined, 2))
//main().catch((error) => console.error(error))

  // const returnData = await fetch(endpoint) 
  // const output =  await returnData.json()
  // res.send(output)
})
 app.listen(port, () => {
 console.log(`app listening at http://localhost:${port}`)
 })
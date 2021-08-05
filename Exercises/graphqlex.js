const express = require('express');
const {GraphQLClient,gql} = require('graphql-request')
const app = express();
const port = 4000;


app.get('/city', async(req,res) => {
   const endpoint = 'https://dcore.fr8.in/v1/graphql';
    const graphqlClient = new GraphQLClient(endpoint)

const query = gql`
    query city($search: String, $limit: Int) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
      id
      name
      is_connected_city
    }
   }
   `
   const city = `${req.query.name}%`
   
   const variables = {
    search: city,  //title: inception-starting point
    limit: 5
  }
  console.log(variables);
   const cityCollections = await graphqlClient.request(query,variables)
   res.send(cityCollections);
})
   //res.send(graphqlClient.request(query,variables))

   app.listen(port,() =>
   console.log(`app listening at :${port}`));








// app.use('/graphql',graphqlHttp({
//    schema: schema,
//    rootValue: root,
//    graphiql: true 
// }));  
// app.listen(4000);  
// console.log('Running a GraphQL API server at http://localhost:4000/graphql'); 
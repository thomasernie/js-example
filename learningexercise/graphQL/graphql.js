const express = require ('express');
const app = express()
const { GraphQLClient, gql} =require('graphql-request')//this package is used to send query request to graphql server
 
  const graphQLClient = new GraphQLClient('https://dcore.fr8.in/v1/graphql') //giving a new operatorthe built-in object types that has a constructor function.
  console.log(graphQLClient)                                                 //giving  the graphqlclient a url that we need response from that graphql server

app.get('/city', async (request, response)=> { 
                                                                              
  const query = gql `                                  
  query city($search: String, $limit: Int) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
      id
      name
      is_connected_city
    }
  }
`
const searchingCity = `%${request.query.name}%`;
const variables = {
  search:searchingCity, // this search based on the name we give in the query parameter  //used % % which it searches any words containing this form letters    
  limit:5
}
   const city = await graphQLClient.request(query,variables)
    response.send(city)

}) 

 

 
  

 
app.listen(5000,() => console.log("the server started at http://localhost:5000"));

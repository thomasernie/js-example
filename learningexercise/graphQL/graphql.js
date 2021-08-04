// const express = require ('express');
// const graphql = require ('graphql')
// const app = express();
// const {graphqlHTTP} = require('express-graphql')
// app.use('/graphql',graphqlHTTP({
//     schema: schema,
//   rootValue: root,
//   graphiql: true,

// }));
// app.listen(4000,()=>{
//     console.log('server running on port 4000')
// });



const express = require ('express');
const app = express()
const {GraphQLClient,Gql} = require ('graphql-request');
 async function main(){
     const endpoint = 'https://dcore.fr8.in/v1/graphql'
 }
 const query = gql`
 query city($search: String, $limit: Int) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
      id
      name
      is_connected_city
    }
  }
`

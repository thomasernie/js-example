const express=require('express')
const app=express()
const port=3000
const { GraphQLClient, gql } = require('graphql-request')

app.get('/city',async (req,res)=> {
  const endpoint = ' https://dcore.fr8.in/v1/graphql'

  const Client = new GraphQLClient(endpoint)

  const querry = gql`query city($search: String, $limit: Int) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
      id
      name
      is_connected_city
    }
  }`
const citySearch = `%${req.query.name}%`;
  const variables= {

          // search:'%che%',limit:2
          search:citySearch,limit:2
          
      }

      

  const finalDatas = await Client.request(querry,variables)
  res.send(finalDatas)

})

app.listen(port)
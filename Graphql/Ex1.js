const express = require('express');
const app = express()
const { request, gql } = require('graphql-request')

const query = gql`
{
    query city($search: String, $limit: Int) {
  city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}, limit: $limit) {
    id
    name
    is_connected_city
  })
    }
}`

request('https://dcore.fr8.in/v1/graphql',query)
.then((data) => 
console.log(data))
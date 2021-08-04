const express = require ('express');
const graphqlHTTP =  require ('express-graphql');
const schema = require ('./schema/schemas');
const app = express();
const port = 4000

app.use('/graphql', graphqlHTTP({
     schema,
     graphql:true 
}));
app.listen(port)
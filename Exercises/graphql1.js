//Execute GraphQL query with a command-line tool
var { graphql, buildSchema } = require('graphql');  
// A schema is constructed using GraphQL schema language  
var schema = buildSchema(`  
  type Query {  
    hello: String  
  }  
`);  
// The root provides a resolver function for each API endpoint  
var root = {  
  hello: () => {  
    return 'Hello world! This is the first GrapghQL query';  
  },  
};  
// Run the GraphQL query '{ hello }' and print out the response  
graphql(schema, '{ hello }', root).then((response) => {  
    console.log(response);  
  });  
  //This is a simple GraphQL query that you executed on command prompt without using a server.
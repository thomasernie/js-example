API? (Application Programming Interface)
     => API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
     => Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
    
    REST Api?
          => REST API stands for Representational State Transfer and is an architectural pattern for creating web services.
          => REST is a ruleset that defines best practices for sharing data between clients and the server.
          =>  It’s essentially a design style used when creating HTTP or other APIs that asks you to use CRUD functions only, regardless of the complexity. REST applications use HTTP methods like GET, POST, DELETE, and PUT.
          =>  REST emphasizes the scalability of components and the simplicity of interfaces.
          =>A Request is sent from client to server in the form of web url as http GET,POST,PUT or DELETE


     GraphQl  

      => GraphQL is a new API standard invented and developed by Facebook. It is an open-source server-side technology, now maintained by a large community of companies and individuals of all over the world.
      => It is also an execution engine that works as a data query language and used to fetch declarative data.
      => GraphQL is an application layer server-side technology which is developed by Facebook for executing queries with existing data. GraphQL can optimize RESTful API calls. It gives a declarative way of fetching and updating your data. 
      => GraphQL helps you to load data from server to client. It enables programmers to choose the types of requests they like to make.

   GraphQl vs Rest API:
    
       Rest Api => Architectural design style
       
                => Multiple endpoints(GET/users,POST/products)
               
       Graphql  =>  Query language
       
                =>  Single Endpoint(POST/graphql)       

Data Fetching
This is one major scenario in terms of accessing an API endpoint to get the data. So in the REST, we may have to hit multiple endpoints. Like if consider the Example1 given below in which we have student details and we want to fetch the address of a particular student. Then, in this case, we could be needed to hit this API /student/id to fetch the initial student data. And, then to get the list of assignments done by the student we are likely to hit another API like /student/id/assignments shown in Example2. 

Example1:

{
“student”: {
“id”: “e4fg33d”,
“name”: “Harry”,
“age”: “15”,
“email”: “harry15@gmail.com”
}
}

Example2:

{
“assignments”: [{
“id”: “1”,
“name”: “Assignment1”
},{
“id”: “2”,
“name”: “Assignment2”
}]
}

On the other hand, with the help of GraphQL, we just simply need to send a single request to access the GraphQL server that includes concrete requirements.  Then the server responds with the help of sending JSON as per the query requirements shown the Example below.
Example:

query {
Student(id: “e4fg33d”) {
name
age
email
assignments {
name
}
}
}

And, with the help of single query by leveraging the capability of GraphQL we will be able to get all the data for which we need to hit 2 API endpoints using REST rather.


1).Define the Schema

The GraphQL schema is used to define the kind of objects which can be fetched from service, and the fields they contain. GraphQL Schema Definition Language is used to define GraphQL schema.

Add the following code in server.js file to define the schema:

(Eg):
// Adding Type Definitions  
const typeDefinition = `  
   type Query  {  
      hello: String  
   }  
Here, hello is the attribute of the query that returns a string value.

2).Create a Resolver

The resolver is used to process the request to the hello attribute of the query. The structure of the resolver function and the schema function must be the same. Add the following code in the server.js file.


(Eg):
// Adding resolver  
const  resolverObject = {  
   Query : {  
      hello: () => 'Hello World! Welcome to JavaTpoint...'  
   }  
}  
  => Use a pre-defined function makeExecutableSchema() to bind the schema and resolver. This function is pre-defined in the graphql-tools module.

  => Add the following code in the server.js file to bind the schema and resolver.

     const {makeExecutableSchema} = require('graphql-tools')  
     const schema = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject})  
 
3). Define Routes to Retrieve Data from ReactJS/GraphiQL Application

 Add the following code in the server.js file to define a route to retrieve the data.

    const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')  
   //create routes for graphql and graphiql  
   app.use('/graphql',graphqlExpress({schema}))     
   app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'})) 

  => Here, the graphqlExpress function is used to register the route http://localhost:4000/graphql and the graphqliExpress function is used to register the route http://localhost:4000/graphiql
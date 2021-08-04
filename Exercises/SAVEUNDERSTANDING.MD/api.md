API? (Application Programming Interface)
     => API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
     => Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.
 
    HTTP API?( Hypertext Transfer Protocol)

     => A web API is a protocol that describes how your clients can access resources and what methods work with your architecture.
     => An HTTP API is an API that uses Hypertext Transfer Protocol as the communication protocol between the two systems. HTTP APIs expose endpoints as API gateways for HTTP requests to have access to a server.
       =>For example, you use an HTTP API every time you set a Zoom meeting in your Google calendar. The API defines how Zoom can communicate directly with Google’s servers to embed a Zoom meeting into the event rather than having to copy and paste the meeting invitation into a field.
    
    REST Api?
          => REST API stands for Representational State Transfer and is an architectural pattern for creating web services.
          => REST is a ruleset that defines best practices for sharing data between clients and the server.
          =>  It’s essentially a design style used when creating HTTP or other APIs that asks you to use CRUD functions only, regardless of the complexity. REST applications use HTTP methods like GET, POST, DELETE, and PUT.
          =>  REST emphasizes the scalability of components and the simplicity of interfaces.
          =>A Request is sent from client to server in the form of web url as http GET,POST,PUT or DELETE


GraphQl  

      => GraphQL is a new API standard invented and developed by Facebook. It is an open-source server-side technology, now maintained by a large community of companies and individuals of all over the world.
      => It is also an execution engine that works as a data query language and used to fetch declarative data.
     
      What is GraphQL?
        
        => GraphQL is an application layer server-side technology which is developed by Facebook for executing queries with existing data. GraphQL can optimize RESTful API calls. It gives a declarative way of fetching and updating your data. 
        => GraphQL helps you to load data from server to client. It enables programmers to choose the types of requests they like to make.

   GraphQl vs Rest API:
    
       Rest Api => Architectural design style
       
                => Multiple endpoints(GET/users,POST/    products)
               
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
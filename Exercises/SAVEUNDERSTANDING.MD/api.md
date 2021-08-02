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
    
        1. Endpoints: => In the REST APIs, the URL we send over the network, or the server denotes a single resource. When we need to fetch data   from multiple resources in REST APIs, we need to request multiple endpoints, leading to multiple round trips for getting all the data we have requested for.

                       => But, in GraphQL, you don’t have such kinds of multiple endpoints. You can fetch data from multiple resources in just one request from the server and with a single endpoint. GraphQL saves you from multiple round trips over the network to get data from multiple resources, and save you time.
        
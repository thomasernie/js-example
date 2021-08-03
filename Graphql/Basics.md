1) API 
=> * API stands for Application Programming Interface.
   * It acts as software intermediary that allows two applications to interact with each other.
   * In other words an API delivers a user response to a system and sends the system's response back to a user.
     an API is considered as a backend component.
   * Using others services in our projects is api
   * Endpoint -> it is a URL that enables the API to gain access on a server.
   * "For example" -> consider you are in a restaurant. You are the client or customer and the chef in the kitchen is the server. The waiter in the restaurant acts as an API where he communicates between the client browser and the server. The API call acts a major role here.


2) REST API
=> * REST stands for “Representational State Transfer”.
   * It is a set of rules that developers follow when they create their API.
   * One of these rules states that we should be able to get a piece of data (called a resource) when we link to a specific URL.
   * REST uses HTTP methods for communication - some of the HTTP verbs are GET, POST, PUT or DELETE etc
   * REST transfers the state of an object of data requested by the client from the web or application server.
   * "For example" ->a GET request to a /user, returns a list of registered users on a system. a POST request to /user/123 creates a user with the ID 123 using the body data. a PUT request to /user/123 updates user 123 with the body data.
PRINCIPLES OF REST API
- Stateless
- Client-Server Architecture
- Cacheable    
- Unified interface
- Layered system


3) Graphql
=> * GraphQL is a query language for APIs
   * It was created by Facebook 
   * REST determines how the API looks like.
   * They provide means of accessing resources present at server required for the client via the web browser by means of request headers, request body, response body, status codes, etc
   * REST has a URI for accessing resources by means of a request-response pattern.


4) Why choose Graphql over Rest API
=> In "Rest API", when we create a frontend and launch a homepage, 
consider a login page, when we want to enter or use the buttons in the homepage(rest client)the API call will take place for more than the expected time in the rest server (will hit the server many times to get the required information). There is several network hop in Rest. also there is a chance to get unwanted data from the server
for ex - in the given data info={id:2, name:"mohan"}, if we need only names from the info, the rest api will take the whole array to the rest and ask them to take what they need.

whereas in "Graphql", it is simple where the client will tell the server whatever he needs using graphql(only the required attributes) and hence the graphql packs the required data and sends to the client.
in graphql, it is "what we see is what we get". A task/getting data is completed only at one request. whatever data we want we get back in a single request.
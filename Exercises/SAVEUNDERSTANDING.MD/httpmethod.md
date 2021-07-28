C - create(Creating data)- POST
R - Read(data retrieval) - GET
U - Update(updating data)- PUT
//D - Delete  -DELETE

=> GET Request // request data from specified resource
=> POST Request // POST is used to send data to a server to create/update a resource.//The data sent to the server with POST is stored in the request body of the HTTP request.
=> PUT Request //  PUT is used to send data to a server to create/update a resource.
    -> POST and PUT are very similar in that they both send data to the server that the server will need to store somewhere.you could use either for the Create or Update scenarios.

         PUT is idempotent.
     => this means is that if you make the same request twice using PUT, with the same parameters both times, the second request will have no effect.
     => This is why PUT is generally used for the Update scenario; calling Update more than once with the same parameters doesn't do anything more than the first call did.
 POST is NOT idempotent.
     =>  making the same call using POST with same parameters each time will cause two different things to happen, hence why POST is commonly used for the Create scenario.
     => (submitting two identical items to a Create method should create two entries in the data store). 

Query Params=> passed to the end of a URL by using the question mark ? followed by the key=value pairs.

      Example:

         localhost:3000/items?name=eraser

The req.params 
       => this property is an object containing properties mapped to the named route “parameters”. 
       => For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}.

           Syntax:

               req.params
 
       eg:

            app.get('/:id', function (req, res) 
            console.log(req.params['id']);
                res.send();
post/post body=>
       
       //  URL to ‘POST’, and under the ‘Body’ tab choose the ‘raw’ radio button and then ‘JSON (application/json)’ from the drop down.
       //now type in the JSON you want to send along with the POST request.

Request body=>  //some specific information that needs to be sent with the request.

       //The Body tab in Postman allows you to specify the data you need to send with a request. You can send various different types of body data to suit your API.




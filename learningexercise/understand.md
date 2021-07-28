get/post/put API:
    GET : 
         # get methoud is used to retrive the data.if we call the get methoud ,we will get back all list of it.
         # In get methoud we send request and get data from the server.
         # for example;if we search smartphones in search bar in amazon website.it will show all smartphones from database.
         # In this methoud we only able send limited amount of data.it also shows in url.
    
    POST: 
          #post methoud is used to send the data to the server.when i need to send additional information inside the     body of the request.
          # for example;in facebook if we create a account by adding username and psswd. it creates a account and this 
          # information is permenantly saved in that facebook server.
          # In this methoud we only able to send large data ,it will not shoow in url.
    PUT :
          # put methoud used to update an existing resourse
          # put request is idempotent.it means we can call the request multiple times.

  Get query params:
                # query paramater is a part of url.to access the quesry paramater
                # we need to type req.query
                # http//localhost:5000/user/?key=value  
                # to send multiple paramaters=http//localhost:5000/user/?key=value&key=value.
                # in post man we can add key value in the params.



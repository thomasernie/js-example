            //synchronous function // frist in frist out.line  ah print agum   
function sync (){
    console.log(" vjy ");
    console.log("athraya");
}
sync();
             //asynchronous it will execute without waiting
  console.log("frist");
  setTimeout(()=>{
      console.log("second");
   },3000 );//giving a timeout for second consolelog
   console.log("third");

   //callback? a function that is passed into another function as parameter
   function call (){
       console.log("coming from call back");
   }
   function highOrder(fn){
       console.log("about to call callback");
       fn();
       console.log("call back has been invoked");     
   }
   highOrder(callback);//oru function ku inoru function a argument ah pass pandrathu than callback funtion.





   //promise?
   //call back alternative is promise.
   //it is an  object that represent a task that will be completed in future.
   var v1 = new Promise(function(resolve,reject){ //reslove na then ku pogum .reject na catch ku pogum
       resolve([1,2,3,4,5]);
   });
   v1.then(function(arr){ //if we get array in reslove then,we get that array and print it 
       console.log("promise v1 resolved with data:",arr);

   });


          
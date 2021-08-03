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
   function callback(){
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




//async function?
// same as the promise but syntax will be change slightly
       

//promise function code:
  function callme(){
      return Promise.resolve("vijay");
  }
console.log(callme())
//using .then
function callme(){
    return Promise.resolve("vijay");
}
callme().then((data)=>{
    console.log(data)
})


//using async function code:
async function callme(){ // same result than ,easykey word ,using this we need not give promise ,async always give or return a promise.
    return ("vijay");
}
callme().then((data)=>{
    console.log(data)
})

//using async funcion and await keyword
//asyncronou task will not wait so await keyword helps to stops until it fetches data .
async function asyncFn(){
    try{
    const posts = await fetch("any URL here");
    if(posts.ok === false){
        throw "page not found" // this will go to catch (err).
    }
    const parsedData= await posts.json();
    console.log(parsedData)
    }
    catch (err){
        console.log("404 error")
    }
}
asyncFn()

//same above using promise and then
function promiseFn(){
    fetch("url here")
    .then((rawData)=>{
        return rawData.json()
    })
    .then((parsedData)=>{
        console.log(parsedData)
    })
}
promiseFn();

          
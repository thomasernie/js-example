// The given example starts a server and listens on a local port

const express = require('express')
// const express is declaring local variable 
// require is the input - importing express module in ('express')

const app = express()
// passing express completely to const variable app - init express

const port = 3000
// port number - its a number/address of every application which helps to communicate via internet
// "port = 3000" is the server port address

app.get('/', (req, res) => {
// app.get is request method - '/' is the root 
// with this method we are giving response
res.send('Hello FR8!')
// re.send () is the message to be sent or printed in the localhost
})

app.listen(port, () => {
// to make port address listen - when the port runs this prints the given input  
  console.log('listening at http://localhost:3000');
//  prints the input given and when we run localhost:3000 the chrome prints the given code into the server/chrome
})
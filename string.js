// Double quote

const varString = "nwar"
let nameString = "Hello " + "nwar " + 1 + true

console.log("single:", nameString)
// single quote
nameString = 'Hello ' + varString + 1 + 1 + true + 'Working'

console.log("double:", nameString)

// + overload quote
nameString = 1 + 1 + 1 + false + " Working \n hi"

console.log("double:", nameString)

// forward slsh
nameString = `Hi ${varString}
hi`

console.log("forward` :", nameString)
// alert is for front end f=and console log for


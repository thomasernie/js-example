//https://github.com/airbnb/javascript
//####types
// string
// number
// boolean
// null
// undefined
// object
// array
// function

// use only const and let dont use var
const _ = require('lodash')

const str = '1'
const num = 1
let bl = false
const nu = null
const ud = undefined
const ob = {
    name: 'sanjay',
    marks: {
        '10th': 81, '12th': 91, 'ug': { sem1: 75, sem2: 80 }
    },
    log: console.log(this),
    pass: marks.ug.sem1 > 40 ? 'pass' : 'fail'
}

console.log('dyamic-ob', ob)
const ob1 = {
    name: 'jay',
    marks: { '10th': 81, '12th': 91 }
}

console.log('dynamicKey', ob.name, ob['name'])
// Bad
function getSemMarks1(sem) {
    return ob.marks.ug[sem]
}

//
const getSemMarks2 = function (sem) {
    return ob.marks.ug[sem]
}

//
const getSemMarks3 = function gettingSemesterMarksForSemesterNamePassed(sem) {
    return ob.marks.ug[sem]
}

// //const getSemMarks3 = (sem) => ob.marks.ug[sem]


// const getSemMarks3 = (sem) => {
//     return ob.marks.ug[sem]
// }

const sem = 'sem2'
console.log('getSemMarks1', getSemMarks1(sem))
console.log('getSemMarks2', getSemMarks2(sem))
console.log('getSemMarks3', getSemMarks3(sem))
console.log('getSemMarks3', getSemMarks3(ob.marks.ug[sem]))


const ar = [0, ob] //dont use mixed array

console.log('array', ar[0], ar[1])

const obj = { key: 0, object: ob } //dont use mixed array

console.log('obj', obj.key, obj.ob)

const func = function () {
    console.log('str', str, 'num', num, 'bl', bl, 'nu', nu, 'ud', ud, 'ob', ob, 'ar', ar)
}

//defined check
//bad
if (str !== null && str !== undefined) {
    bl = true
}
console.log('bad', bl)
// has check

//good
if (str) {
    bl = true
}
console.log('good1', bl)
//good
bl = str && true
console.log('good2', bl)

//defined check
//stop condition?true : false
// result = ((ob1.marks.ug.sem1 > 40) && (ob1.marks.ug.sem2 > 40)) ? 'pass' : 'fail'
// console.log('stop.result', result)
//bad
temp = ob1 !== null && ob1 !== undefined && ob.test1 && ob.test1.test2 ? ob.test1.test2 : null
temp = ob1 && ob1.marks && ob1.marks.ug && ob1.marks.ug.sem1 && ob1.marks.ug.sem1 > 40 ? 'pass' : 'fail'

console.log('bad.result', temp)
// has check

// //good

temp = _.has(ob, 'marks.ug.sem1') && ob.marks.ug.sem1 > 40 ? 'pass' : 'fail'
temp = _.has(ob1, 'marks.ug.sem1') && ob1.marks.ug.sem1 > 40 ? 'pass' : 'fail'

console.log('good.result', temp)



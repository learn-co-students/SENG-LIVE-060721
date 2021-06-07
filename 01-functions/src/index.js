//Data Types
//Strings
//Numbers
//Boolean
//Undefined
//null
let cat = 'rose'
let num = 0
let bool = true
let und 

let intro1 = `Thanks for tuning into the Flatiron Podcast`
let intro2 = `Hi and Welcome to the Flatiron Podcast`

//a function is a mini program
function introduction() {
    console.log('hi before return')
    // return defines the output or the value of the function
    return 
    console.log('hi after return')

}
// reference
//console.log(introduction)
// call or invocation
//console.log(introduction())

//Param
//Is a var you create in your function definition 
const intro = function(introStr) { 
    return introStr
}
const introWithHostRose = function(introStr) { 
    return `${introStr}, with me your host Rose! ` 
}
//Arg 
//is a value you pass to a function when it's called
let runIntro = intro(intro2)
//console.log(runIntro)

// => is in place of the function keyword 
let guestAppearance = () =>  'Welcome to the Flatiron podcast, what is your name???'

const sayHi = name => `Hello I'm ${name} happy to be here!`
// let can be assigned a new value
//guestAppearance = 'cat'
// a const can't be assigned a new value
//sayHi = 'cat'


// any function can be passed as a param / argument
function playIntro(introFoo, introStr, guestFoo, sayHiFoo, guestName) {
     console.log(introFoo(introStr))
     console.log(guestFoo())
     console.log(sayHiFoo(guestName))
}
playIntro(introWithHostRose, intro1, guestAppearance, sayHi, 'luke')




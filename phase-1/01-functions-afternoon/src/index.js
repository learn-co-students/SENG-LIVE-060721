//DataTypes
//numbers
//strings
//booleans
//undefined
//null
let num = 0
let str = 'rose'
let bool = true
let und 

let intro1 = 'Welcome to the Flatiron Podcast!'
let intro2 = 'Thanks for tuning in!'
//What is a function?
//performs a task [x]
//returns something [x]
//can take in an argument 
//mini program 
const intro = function(introStr){
    console.log(introStr)
}
const introWithRose = function(introStr){
    console.log(`${introStr}, with your host Rose!`)
}

//console.log(playIntro)
const guestAppearance = name =>  console.log(`Welcome to the ${name} to the podcast`)
const returnGuest = name => console.log(`Welcome back ${name}`) 
const returnGuestIntro = () => console.log(` Happy to be back!`)
const guestIntro = () => console.log(`Hi, happy to be here!`)


const playIntro = function(introFoo, introStr, guestAppearanceFoo, name, guestIntroFoo){
    //console.log('before debugger')
    //debugger
    //console.log('after debugger')
    console.log(guestIntro)
    introFoo(introStr)
    guestAppearanceFoo(name)
    guestIntroFoo(name)
    return 
 }

 playIntro(introWithRose, intro2, returnGuest, 'ix', returnGuestIntro )


 //Scope
 // Where is it and what can I access
 //Global
 //Functional
 //Block


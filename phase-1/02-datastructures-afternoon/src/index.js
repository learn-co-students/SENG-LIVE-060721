//Lets make an app to track orders at our bakery Flatiron Cakes!

//Plain Old JavaScript Object
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}

//nested data, Array of Objects
const daysOrders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 40.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]
// Objects and Arrays *******************************
//console.log(cakeOrder1)
//Read Values from Objects
//dot notation
//console.log(cakeOrder1.flavor)
//bracket notation
//values can not access using an index
//console.log(cakeOrder1["amount"])
//Add key to Object
//cakeOrder1.complete = true
cakeOrder1["complete-order"] = true

//Update Values in Objects
cakeOrder1.amount = 24

//Delete Values and keys in objects
 delete cakeOrder1["complete-order"]

//onsole.log(cakeOrder1)

//Gives us the keys
//console.log(Object.keys(cakeOrder1))
//Gives us the values
//console.log(Object.values(cakeOrder1))
//Gives us both in a nested array of arrays
//console.log(Object.entries(cakeOrder1))


//Arrays and Nested data ********************************

//Read elements
//Bracket notation only
console.log(daysOrders[1])
//Update elements
let newCake =   {
    id: 16,
    flavor: 'Blue Champagne',
    size: 'cup cake',
    amount: 10,
    price: 20.5
}
//daysOrders[2] = newCake
daysOrders[1].price = 60


//Add elements
//The start
daysOrders.unshift(newCake)
//The end
//daysOrders.push(newCake)

//Delete elements
//daysOrders.pop()
daysOrders.shift()

//middle 
//slice will return us the element
//but wont change the array
//console.log(daysOrders.slice(1,2))
daysOrders.splice(1,1)
//console.log(daysOrders)

//Loops and Callbacks
//Loop Through Array and do some action **************************
    // for(cakeObj in cakeArray){
    //     console.log('for..in', cakeObj)
    // }
        // for(let i = 0; i < array.length; i++){
    //     console.log(array[i])
    // }
//for... of
//make a callback 
//a callback is a function that is passed as an argument
const logCake = order => console.log(order)
const logPrice = order => console.log(order.price)
const logFlavor = order => console.log(order.flavor)
//update our price 
//to 50% off
const halfOff = order => order.price = order.price/2

function allCakes(cakeArray, action){
    for(cakeObj of cakeArray){
        action(cakeObj)
    }
}
allCakes(daysOrders, halfOff)
console.log(daysOrders)


//Log Cakes
//50% off Sale


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

//Read Values from Objects
//dot notation
//console.log(cakeOrder1.flavor)
//bracket notation
//console.log(cakeOrder1["flavor"])

//Add key to Object
cakeOrder1.complete = true
//cakeOrder1["complete-order"] = false
//console.log(cakeOrder1.complete-order)


//Update Values in Objects
cakeOrder1.amount = 15
cakeOrder1["amount"] = 20

//Delete Values and keys in objects
delete cakeOrder1.complete
//delete cakeOrder1["complete"]
//console.log(cakeOrder1)

//Gives us the keys
//console.log(Object.keys(cakeOrder1))
//Gives us the Values
//console.log(Object.values(cakeOrder1))
//Gives us both in a nested array of arrays
//console.log(Object.entries(cakeOrder1))


//Arrays
//console.log(daysOrders)
//Read elements
//console.log(daysOrders[0])
//daysOrders[3]
//console.log(daysOrders[daysOrders.length-1])
//Update elements
//daysOrders[0]["amount"] = 2
daysOrders[0].amount = 2
daysOrders[0].price = daysOrders[0].amount * 40
//daysOrders[25] = {}
//console.log(daysOrders)
//Delete elements
//daysOrders.pop()
//daysOrders.shift()
//Return us the element from the array
//Does not change the array
//daysOrders.slice(-1)
//Returns the element and changes the array
//daysOrders.splice(1,1)

//console.log(daysOrders)


//Loops, Conditionals and Callbacks
console.log(daysOrders)

//Loop Through Array 
   // for loop
    // for(let i = 0; i < array.length; i++){
    // }
   // for in
    // for(let item in array){
    // }
//function keyword would work here as well
//using arrows to make code cleaner 
//Action 
//Log Cakes
//50% off Sale
const logCake = item => console.log(item)
const sale = item => item.price = item.price/2

//Higher order functions
function updateCakeOrders(array, action){
    console.log(action)
    // for of
    for(let cake of array){
        // debugger
            //How can we debug the loop by stopping the code in place?
        action(cake)
    }
 
}
// updateCakeOrders(daysOrders,logCake)
updateCakeOrders(daysOrders,sale)
// console.log(daysOrders)


//Create a function that finds every order that is above $30
function expensiveCake(array){
    let i = 0
    let resultArray = []
    while(i < array.length){
        if(array[i].price > 30){
            resultArray.push(array[i])
            console.log(resultArray)
        }
        i++
    }
    return resultArray
}

console.log(expensiveCake(daysOrders))


//Loop Through object

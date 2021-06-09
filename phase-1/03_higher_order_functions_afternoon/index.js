const orders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 40.00,
        ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00,
        ingredients: ["cardamon", "rose water", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5,
        ingredients: ["Andre Blush Champagne", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00,
        ingredients: ["earl grey", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
    }
]


// forEach ****************************************************
// Should loop through every item in an array and perform some action on every item in the array
// return undefined
//How does this function get an array
//How do we loop through that array?
//make the action dynamic
function myForEach(array, action){
    for(value of array){
        action(value)
    }
}
const logsItem = item => console.log(item)
const logFlavor = orders => console.log(orders.flavor)
//const priceCheck = item => console.log(item.price) 

//myForEach(orders, orders)
// orders.forEach(logFlavor)
// orders.forEach(item => console.log(item.price))
// // orders.forEach(function(item){
//     console.log(item.price)
// })



// map ********************************************************
// Should loop through every item in an array
// it should take a transform function
// transform every item in the array
// should return a new array with all of the transformed items
function myMap(array, change){
    let emptyArray = []
    for(value of array){
        emptyArray.push(change(value))
    }
    return emptyArray
}

const sale = orders => {
    newObj = {...orders}
    newObj.price = orders.price/2
     return newObj
}
const capitalizeFlavors = orders => {
   orders.flavor =  orders.flavor.toUpperCase()
    return orders
}
const price = order => order.price
// console.log(orders)
// console.log(myMap(orders, sale))
// console.log(orders.map(item => {
//    return item.size
// }))
//console.log(orders.map(item => item.size))
 

//filter
//Should loop through every item in the array
//perform a test on every item
//Should return an array of items that returned true in the test
const myFilter = (array, action) => {
    let emptyArray = []
    for(value of array){
        if(action(value) === true){
            emptyArray.push(value)
        }
    }
    return emptyArray
}

const expensive = item => item.price > 30 
//console.log(myFilter(orders, expensive))
//Every item that passes the test
const cheap = orders.filter(item => item.price < 30)
//The first item that passes the test
const firstExpensive = orders.find(item => item.price > 30)
// console.log(firstExpensive)


// reduce
// should loop through every item in an array
// should have an accumulator that is passed to every iteration
// perform some action involving the accumulator that will result in a
// single value


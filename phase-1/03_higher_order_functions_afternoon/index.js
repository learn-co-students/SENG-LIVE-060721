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
function myForEach(myArray, callBack){
    for(element of myArray ){
        callBack(element)
    }
}

const flavors = order => console.log(order.flavor)
const prices = order => console.log(order.price)
// orders.forEach(element => console.log(element))
// orders.forEach(flavors)

//myForEach(orders, prices)
// map ********************************************************
// Should loop through every item in an array
// it should take a transform function
// transform every item in the array
// should return a new array with all of the transformed items
function myMap(myArray,callBack){
    let newArray = []
    for(element of myArray){
        newArray.push(callBack(element))
    }
    return newArray
}
const upCaseFlavor = order => {
    return order.flavor.toUpperCase() 
}

const upCaseFlavorKeepObj = order => {
    order.flavor = order.flavor.toUpperCase()
    return order
}

const discount = orders.map(order => order.price/2)
const discount2 = orders.map(order => {
    order.price = order.price/2
    return order
}) 
// console.log(discount2)
// console.log(myMap(orders, upCaseFlavorKeepObj))



//filter
//Should loop through every item in the array
//perform a test on every item
//Should return an array of items that returned true in the test
function myFilter(myArray, callBack){
    let newArray = []
    for(element of myArray){
        if(callBack(element) === true){
            newArray.push(element)
        }
    }
    return newArray
}

const numberOfItems = item => item.amount > 1

console.log(orders)
console.log('filter', orders.filter(item =>item.price > 19))
console.log('find', orders.find(item =>item.price > 19))
let filteredCakes = orders.filter(item => !item.ingredients.includes("cardamon")).map(item => item.flavor)
console.log(filteredCakes)
//console.log(myFilter(orders, numberOfItems))


// reduce
// should loop through every item in an array
// should have an accumulator that is passed to every iteration
// perform some action involving the accumulator that will result in a
// single value


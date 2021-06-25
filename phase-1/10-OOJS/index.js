// let garfield = {
//     name: "Garfield",
//     breed: "Persian Tabby",
//     introduce: function(){
//         return `Meow, my name is Garfield and I'm a Persian Tabby.`
//     }
// }

// let helloKitty = {
//     name: "Hello Kitty",
//     breed: "Cartoon",
//     introduction: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon.`
//     }
// }

// let keyboardCat = {
//     name: "Keyboard Cat",
//     breed: "Yes",
//     introduce: function(){
//         return `Meow, my name is Keyboard Cat and I like Bread.`
//     }
// }

// let cats = [garfield, helloKitty, keyboardCat]
// console.log(garfield.introduce())
// cats.forEach(cat => cat.introduce())

// document.querySelector('button').addEventListener('click', (e) => console.log(e))

//Prototype 
function CatProto(name, age, color, breed){
    this.name = name,
    this.age = age,
    this.color = color,
    this.breed = breed,
    this.favFoods = ['fish']
    
}

let rosePro = new CatProto('rose', 9, 'black and white', 'domestic longhair')

let lukePro = new CatProto('luke', 2, 'black and white', 'domestic longhair')
// console.log(luke)

CatProto.prototype.toy = 'feather on a stick'
// console.log(rose.toy)

CatProto.prototype.sayHi = function(){
    console.log(`hi I\'m ${this.name}`)
}
// console.log(rose)
// rose.sayHi()
// luke.sayHi()

class Animal{
    constructor(name, age, color, breed){
        this.name = name,
        this.age = age,
        this.color = color,
        this.breed = breed,
        this.favFoods = []
    }
    sayHi(){
        console.log(`hi I\'m ${this.name}`)
    }
    addFood(food){
        this.favFoods.push(food)
    }
    loopThroughFoods(){
        this.favFoods.forEach(this.logFoods)
    }
    logFoods = (food) => {
        console.log(`${this.name} loves ${food}`)
    }
}

class Dog extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color, breed)
        this.favFoods = ['all foods']
    }
}


class Cat extends Animal{
    constructor(name, age, color, breed){
        super(name, age, color, breed)
        this.outdoor = 'false'
        this.favFoods = ['fish']
    }
    static isCat(obj){
        return obj instanceof Cat
    }
    sayHi(){
        console.log(`hi I\'m ${this.name} meow`)
    }
    feedMe(){
        console.log('MEOOOOOOOOOOWWWWWWWWW')
    }
}

class Fish extends Animal{

}

class Bird extends Animal{

}


let rose = new Cat('rose', 9, 'black and white', 'domestic longhair')
let luke = new Cat('luke', 2, 'black and white', 'domestic longhair')

let jack = new Dog('Jack', 3, 'white beige', 'pit bull mix')
console.log(rose)
console.log(jack)
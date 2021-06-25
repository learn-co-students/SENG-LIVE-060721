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
//     introduce: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon.`
//     }
// }

let keyboardCat = {
    name: "Keyboard Cat",
    breed: "Yes",
    introduce: function(){
        return `Meow, my name is Keyboard Cat and I like Bread.`
    }
}

// let arr = [garfield, helloKitty, keyboardCat]

// arr.forEach(item => console.log(item.introduce()))

//Prototype

function CatProto(name, age, color, breed){
    this.name = name,
    this.age = age,
    this.color = color,
    this.breed = breed
    
}

let roseProto = new CatProto('rose', 10, 'black and white', 'domestic longhair')
let lukeProto = new CatProto('luke',3 , 'brown and white', 'domestic longhair')

CatProto.prototype.toy = 'Feather on a stick'

CatProto.prototype.sayHi = function(){
    console.log(`Hi, my name is ${this.name}`)
}


roseProto.food = []
class Animal{
    constructor(name, age, color, breed){
        this.name = name
        this.age = age
        this.color = color
        this.breed = breed
        this.favFoods = []
    }
    sayHi(){
        console.log(`Hi, my name is ${this.name}`)
    }
    addFood(food){
        this.favFoods.push(food)

    }
    allCaps(){
       this.name = this.name.toUpperCase()
    }
    loopThroughFoods = () => {
        this.favFoods.forEach(food => console.log(`${this.name} loves ${food}`))
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
        this.favFoods = ['fish']
    }
    static isCat(obj){
        return obj instanceof Cat
    }
    sayHi(){
        console.log(`Hi my name is ${this.name} meow`)
    }
    feedMe(){
        console.log('MEEEEOOOOOOOOOOOOWWWWWWWWWWW')
    }
   
}
class Bird extends Animal{

}

let rose = new Cat('rose', 10, 'black and white', 'domestic longhair')
let luke = new Cat('luke', 3, 'brown and white', 'domestic longhair')

let jack = new Dog('jack', 3, 'beige', 'pit bull mix')

let myName = 'Allan'; // String
let age = 24; // Number
let isCurrentlyHungry = true; // Boolean
let middleName = null; // Null
const eyeColor = "brown"; // Constant

let person = {
    firstName: myName,
    age: age,
    hungry: isCurrentlyHungry,
    middleName: middleName,
    eyeColor: eyeColor
};

let propName = "hungry";

person.eyeColor = "black";
person[propName] = false;

let fruits = ["apples", "bananas", "oranges", "grapes"];
fruits[2] = "tangerines";
fruits.push("oranges");
let popped = fruits.pop();

console.log(fruits);
console.log(popped);
console.log(fruits.length);
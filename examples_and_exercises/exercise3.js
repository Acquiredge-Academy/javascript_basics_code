// Implement a function 'fizzBuzz' that takes an input
// If input is:
// Divisible by 3, return "Fizz"
// Divisible by 5, return "Buzz"
// Divisible by 3 and 5, return "FizzBuzz"
// Divisible by neither, return input
// Not a number, return "Not a number"

function fizzBuzz(input) {
    if (typeof input !== "number") {
        return "Not a number";
    }
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7)); // 7
console.log(fizzBuzz(false)); // "Not a number"
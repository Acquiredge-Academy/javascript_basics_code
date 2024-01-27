// Exercise: Sum Limit
// Write a function sumOdd that takes a limit
// and returns the sum of all odd integers up to the limit, inclusive.
// The limit can not be negative.

function sumLimit(limit) {
    let sum = 0;
    for(let i = 1; i <= limit; i+=2){
        sum += i;
    }
    return sum;
}

console.log(sumLimit(0)); // 0
console.log(sumLimit(3)); // 4
console.log(sumLimit(8)); // 16
console.log(sumLimit(19)); // 100
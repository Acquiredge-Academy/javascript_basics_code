// Exercise: Sum Odd
// Write a function sumOdd that takes a limit
// and returns the sum of all odd integers up to the limit, inclusive.
// The limit can not be negative.

function sumOdd(limit) {
    let sum = 0;
    for(let i = 1; i <= limit; i+=2)
        sum += i;
    return sum;
}

console.log(sumOdd(0)); // 0
console.log(sumOdd(3)); // 4
console.log(sumOdd(8)); // 16
console.log(sumOdd(19)); // 100
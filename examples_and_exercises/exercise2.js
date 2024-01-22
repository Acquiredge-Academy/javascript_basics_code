// Even and Odd Numbers
// Write a function that takes a number as the limit.
// The function should print out all numbers from 0 to that limit, inclusive.
// For each number, it should also print whether it is even or odd.
function showNumbers(limit) {
    // for each number from 0 to limit:
    for(let i = 0; i <= limit; i++){
        // if the number is even, print number + "Even"
        // if(i % 2 === 0) console.log(i, "Even");
        // // else, print number + "Odd"
        // else console.log(i, "Odd");

        const message = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i, message);
    }

}

showNumbers(5);
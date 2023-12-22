// Arithmetic
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment
// console.log(x++);
// console.log(x);

// Decrement
// console.log(--y);
// console.log(y);

// Assignment
// x = x + 5;
x += 5;

// Comparison
let z = 1;

// console.log(z > 0);
// console.log(z >= 1);
// console.log(z < 0);
// console.log(z <= 1);

// Equality
// Strict Equality (type and value)
// console.log(z === 1);
// console.log(z !== 1);
// console.log(z === '1');

// Loose Equality Operator (value)
// console.log(z == '1');
// console.log(z != 1);

// Logical Operator
let highIncome = false;
let goodCredit = false;
// Logical And (&&)
// Returns TRUE if both operands are true
let approvedForLoan = highIncome && goodCredit;
// console.log(approvedForLoan);

// Logical Or (||)
// Returns TRUE if at least one of the operands is true
approvedForLoan = highIncome || goodCredit;
console.log(approvedForLoan);

// Logical Not (!)
let rejected = !approvedForLoan;
console.log(rejected);
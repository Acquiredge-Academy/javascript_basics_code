function greet(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

// greet("John", "Smith");
// greet("Mark", "Smith");

// Declare a function that calculates the area of a rectangle
// Given the length and height
// PREP: Parameters, Return, Examples, Pseudocode

function areaOfRectangle(length, height) {
    if(length < 0 || height < 0){
        return -1;
    }
    let area;
    // Set area equal to length times height
    area = length * height;
    return area;
}

console.log(areaOfRectangle(4, 5)); // 20
console.log(areaOfRectangle(3, 4)); // 12
console.log(areaOfRectangle(10, 10)); // 100
console.log(areaOfRectangle(-3, 6)); // -1
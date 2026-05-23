// the sequence to work with are 1 1 2 3 5 8 and so on
//I want to create a function that returns a specific number of this sequence
//the next number is the sum of the previous two numbers
//does not accept negative number

const fibonacci = function(num) {
    const acceptString = parseInt(num, 10);
    //Check for negative number
    if (isNaN(acceptString) || acceptString < 0) {
        return "OOPS";
    }
    let num1 = 0
    let num2 = 1
    let sum;
    if (acceptString === 0) {
    return num1;
    } else if (acceptString === 1) {
        return num2;
    } else {
        for(let i = 2; i <= acceptString; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }

};

// Do not edit below this line
module.exports = fibonacci;

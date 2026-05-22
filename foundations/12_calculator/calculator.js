const add = function(a, b) {
  return a + b; 
};

const subtract = function(a, b) {
  return a - b; 
};
//use reduce method to sum up all the numbers in the array, starting with an initial value of 0
const sum = function(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
};
//reduce method for multiplication, starting with an initial value of 1
const multiply = function(numbers) {
  return numbers.reduce((total, n) => total * n, 1);

};
//a function that takes two numbers
//let assume the numbers are base and exponent
//return the result if the base is raised to power the exponent
const power = function(base, exponent) {
  return (base ** exponent);
};
//given a single number, find it factorial, (which is to multiply,
//all whole numbers from a given number down to 1, and return the result.)
const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  //using factorial rule: n! = n * (n - 1)!
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

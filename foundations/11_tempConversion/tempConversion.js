const convertToCelsius = function(fahrenheit) {
  //using the formula (F - 32) * 5/9 for conversion
  let celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  //using the formula (C * 9/5) + 32 for conversion
  let fahrenheit = (celsius * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

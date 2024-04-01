const convertToCelsius = function(fahrenheit) {

  let raw = (fahrenheit - 32) * (5/9);

  return Math.round(raw * 10) / 10

};

const convertToFahrenheit = function(celcius) {

  let raw = celcius * (9/5) + 32;

  return Math.round(raw * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

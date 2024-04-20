const add = function(one ,two) {
    return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(arr) {
	return arr.reduce((total, num) => add(total, num), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);

};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
  const listNum = [];
  if (num == 0) {

    listNum.unshift(1);

  } else {
    while (num >= 1) {
      listNum.unshift(num);
      num = num - 1;
    }
  }

  return multiply(listNum);
	
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

const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((total, current) => {return total += current}, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total *= current)
};

const power = function(x, y) {
  if (y == 1) {
    return x
  }
	return x * power(x, y-1)
};

const factorial = function(x) {
  if (x == 0) {
    return 1
  } 
  return x * factorial(x - 1)
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

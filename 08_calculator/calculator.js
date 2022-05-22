const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach((i) => {
    sum += i;
  })
  return sum;
};

const multiply = function(arr) {
  let res = arr[0];
  for(let i = 1; i < arr.length; i++) {
    res = res * arr[i];
  }
  return res;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	if (x == 0 || x == 1) {
    return 1;
  }
  else if (x > 0) {
    return x * factorial(x - 1);
  }
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

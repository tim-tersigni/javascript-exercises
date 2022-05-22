function fibHelper(x1, x2, i, num) {
  if (i >= num - 2) return x1 + x2;

  return fibHelper(x2, x1+x2, i+1, num);
}

const fibonacci = function(num) {
  if (num == 0) return 0;
  else if (num < 0) return 'OOPS'
  return fibHelper(0, 1, 0, num);
};

console.log(fibonacci(1))

// Do not edit below this line
module.exports = fibonacci;

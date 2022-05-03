// COMPLETED 05/02/2022

const reverseString = function(input) {
  out = '';
  for(const char of input) {
    console.log(char);
    out = char + out;
  }
  return out;
};

// Do not edit below this line
module.exports = reverseString;

const ftoc = function(temp) {
  result = (temp - 32) * (5/9);
  rounded = Math.round(result * 10) / 10;
  return rounded;
};

const ctof = function(temp) {
  result = temp * (9/5) + 32;
  rounded = Math.round(result * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

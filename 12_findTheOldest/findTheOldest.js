const findTheOldest = function(p) {
  let people = p;
  return p.reduce((prevVal, curVal, i) => {
    if (curVal.yearOfDeath == undefined) {
      curVal.yearOfDeath = new Date().getFullYear();
    }
    if (prevVal.yearOfDeath == undefined) {
      prevVal.yearOfDeath = new Date().getFullYear();
    }
    let curAge = curVal.yearOfDeath - curVal.yearOfBirth;
    let prevAge = prevVal.yearOfDeath - prevVal.yearOfBirth;

    if (curAge > prevAge) {
      return curVal
    }
    return prevVal;
  })
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;

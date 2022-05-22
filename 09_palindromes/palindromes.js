const palindromes = function (text) {
  let left = [];
  let right = [];

  text = text.toLowerCase();

  // remove puncutation or spaces
  let splitText = text.split('');
  let newTextArr = [];
  let removables = [' ', '!', '.', ','];
  splitText.forEach((letter, i) => {
    let removed = false;
    removables.forEach((r) => {
      if (letter === r) {
        removed = true;
      }
    });

    if (removed == false) {
      newTextArr.push(letter);
    }
  });
  text = newTextArr.join('');
  console.log(`processed text: ${text}`);

  // divide word into left and right for comparison
  for (let i = 0; i < text.length / 2; i++) {
    left.push(newTextArr[i]);
    right.push(newTextArr[newTextArr.length - (i + 1)]);
  }
  console.log(`left:${left} right:${right}`);

  // compare
  if (left.every((val, i) => val === right[i])) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;

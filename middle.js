const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;
  const middleArr = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    return [array[middleArr - 1], array[middleArr]];
  } else {
    return [array[middleArr]];
  }
};

module.exports = middle;

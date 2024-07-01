const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}!== ${arr2}`);
  }
};

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

//test code

console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2])); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [7]); // => It fails, because not equal

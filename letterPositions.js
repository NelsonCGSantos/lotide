const letterPositions = function (sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
        const ch = sentence[i];
        if (ch !== ' ') {
        if (!results[ch]) {
            results[ch] = [];
        }
        results[ch].push(i);
    }
    }
    return results;
  };
  
  
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
  const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}!== ${arr2}`);
    }
  };
  
  
  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions("hello").l, [2, 3]);
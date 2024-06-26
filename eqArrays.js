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
   const assertEqual = function (actual, expected) {
     if (actual === expected) {
       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
     } else {
       console.log(`🛑🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
     }
   };
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true); 
  assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), true); 
  assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), true); 
  assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), false); 
  assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), false); 
  
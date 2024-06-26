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

const without = function (base, itemsToCheck) {
    const result = [];
    for (let a = 0; a < base.length; a++) {
        if (!itemsToCheck.includes(base[a])) {
            result.push(base[a]);
        }
    }
return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
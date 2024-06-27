const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
    results.push(callback(item));
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

const upCase = map(words, function(word) {
    return word.toUpperCase();
});
assertArraysEqual(upCase, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const fLetters = map(words, function(word){
    return word[0];
});

assertArraysEqual(fLetters, ["g", "c", "t", "m", "t"]);

const dayo = map(words, function(word){
    return word + "dayo";
});

assertArraysEqual(dayo, ["grounddayo", "controldayo", "todayo", "majordayo", "tomdayo"]);
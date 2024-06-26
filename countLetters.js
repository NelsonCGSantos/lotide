const assertEqual = function (actual, expected) {
    if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countLetters = function(sentence) {
    const result = {};

    for (const ch of sentence) {
        if (ch !== ' ') {
            if (result[ch]) {
                result[ch] += 1;
            } else {
                result[ch] = 1;
            }
        }
}
return result;
};


const result1 = countLetters("LHL");

assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

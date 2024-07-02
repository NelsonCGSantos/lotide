const eqArrays = require("../eqArrays");

const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([3, 4, 5], [3, 4, 5]);
assertArraysEqual([3, 2, 5], [3, 2, 5]);
assertArraysEqual([3, 3, 3], [3, 3, 3]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 2, 1], [3, 2, 1]);
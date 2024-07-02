const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), false);
assertEqual(eqArrays([5, 6, 7], [5, 6, 9]), false);

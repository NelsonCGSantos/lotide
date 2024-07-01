const assertEqual = require("../assertEqual");
const tail = require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const singleElementArray = [1];
const tailSingleElementArray = tail(singleElementArray);
assertEqual(tailSingleElementArray.length, 0);
assertEqual(singleElementArray.length, 1);

const emptyArray = [];
const tailEmptyArray = tail(emptyArray);
assertEqual(tailEmptyArray.length, 0);
assertEqual(emptyArray.length, 0);

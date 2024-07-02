const assert = require('chai').assert;
const tail = require("../tail");



describe("#tail", () => {
  it("should return an array with the elements excluding the first one", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it("should return an empty array when passed an array with a single element", () => {
    const singleElementArray = [1];
    const result = tail(singleElementArray);
    assert.strictEqual(result.length, 0);
  });

  it("should return an empty array when passed an empty array", () => {
    const emptyArray = [];
    const result = tail(emptyArray);
    assert.strictEqual(result.length, 0);
  });

});
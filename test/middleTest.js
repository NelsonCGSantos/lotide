const chai = require('chai');
const deepEqual = chai.assert.deepEqual;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require("../middle");


describe("#middle", () => {
  it("should return [3] of [1,2,3,4,5]", () => {
    deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [3,4] of [1,2,3,4,5,6]", () => {
    deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

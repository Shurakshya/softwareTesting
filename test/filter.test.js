import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("filter.js Testing", () => {

  it("return empty array when array is null", () => {
    const arrayToTest = null;
    const result = [[]]
    expect(filter(arrayToTest, ({ active }) => active)).to.deep.equal(result);
  })

  it("returns user which matches the predicate", () => {
    const arrayToTest= [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ]
    const result = [{ 'user': 'barney', 'active': true }]
    expect(filter(arrayToTest, ({ active }) => active)).to.deep.equal(result)
  })

  it("returns empty array when predicate doesn't match", () => {
    const arrayToTest= [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred',   'active': false }
    ]
    const result = [[]]
    expect(filter(arrayToTest, ({ active }) => active)).to.deep.equal(result)
  })


});
import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("filter.js Testing", () => {

  const arrayToTest= [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ]

  it("returns user which matches the predicate", () => {
    const result = [{ 'user': 'barney', 'active': true }]
    expect(filter(arrayToTest, ({ active }) => active)).to.deep.equal(result)
  })

});
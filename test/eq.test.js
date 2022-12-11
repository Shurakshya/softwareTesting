import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect


describe("eq.js Testing", () => {
  const value = {'user': 'test'}
  const compareValue= {'user': 'test1'}

  it("returns true when both values are equal", () => {
    expect(eq(value, value)).to.equal(true);
  })

  it("returns true when both value is NaN", () => {
    expect(eq(NaN, NaN)).to.deep.equal(true)
  })

  it("returns false when both values are not equal", () => {
    expect(eq(value, compareValue)).to.equal(false);
  })

  it("returns false when one value is object and other is string", () => {
    expect(eq(value, 1)).to.deep.equal(false)
  })
});
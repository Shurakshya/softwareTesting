import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect


describe("isEmpty.js Testing", () => {

  it("returns true when value is null", () => {
    const valueToTest = null;
    expect(isEmpty(valueToTest)).to.equal(true);
  })

  it("returns true when value is boolean", () => {
    expect(isEmpty(true)).to.deep.equal(true)
  })

  it("returns true when value is number", () => {
    expect(isEmpty(1)).to.deep.equal(true)
  })

  it("returns false when value is array", () => {
    const valueToTest= [1,2,3];
    expect(isEmpty(valueToTest)).to.deep.equal(false)
  })

  it("returns false when value is string", () => {
    const valueToTest= 'testValue';
    expect(isEmpty(valueToTest)).to.deep.equal(false)
  })

  it("returns false when value is object", () => {
    const valueToTest= {'user': 'test'}
    expect(isEmpty(valueToTest)).to.deep.equal(false)
  })
});
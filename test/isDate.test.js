import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect


describe("isDate.js Testing", () => {
  const value = new Date;

  it("returns true when value is Date Object", () => {
    expect(isDate(value)).to.equal(true);
  })

  it("returns false when value is not Date Object", () => {
    expect(isDate('Sun Decemeber 11 2022')).to.equal(false)
  })
});
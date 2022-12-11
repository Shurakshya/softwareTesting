import chai from "chai"
import sum from "../src/add.js"
const expect = chai.expect


describe("Sum", () => {
 it("adds positive number to positive number", () =>{
    expect(sum(3,6)).to.equal(9)
 });

 it("subtracts if one number is negative", () => {
    expect(sum(-3,9)).to.equal(6)
 });

 it("Non numbers", () => {
    expect(sum(NaN, 5)).to.deep.equal(NaN) 
 });

})
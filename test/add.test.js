import chai from "chai"
import sum from "../src/add.js"
const expect = chai.expect


describe("Sum", () => {
 it("adds positive number to positive number", () =>{
     expect(sum(3,6)).to.equal(9)
 });

 it("adds negative number to positive number", () =>{
    expect(sum(-3,6)).to.equal(3)
});

})
import chai from "chai"
import defaultTo from "../src/defaultTo.js"
const expect = chai.expect


describe("defaultTo.js Testing", () => {

 it("integer check", () =>{
     expect(defaultTo(10, 5)).to.equal(10)
 });

 it("float check", () =>{
    expect(defaultTo(10.2, 5.2)).to.equal(10.2)
});

 it("string check", () =>{
    expect(defaultTo("world", "no")).to.equal("world")
 });

 it("null pass", () =>{
    expect(defaultTo(null, 1)).to.equal(1)
 });

 it("undefined pass", () =>{
    expect(defaultTo(undefined, 1)).to.equal(1)
 });

 it("NaN pass", () =>{
    expect(defaultTo(NaN, 1)).to.equal(1)
 });

})
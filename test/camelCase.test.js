import chai from "chai"
import camelCase from "../src/camelCase.js"
const expect = chai.expect

describe("camelCase.js Testing", () => {
    it("Continous String", () =>{
        expect(camelCase('CreateSomeThingNEW')).to.equal('createSomeThingNew')
    });
   
    it("String with separators", () =>{
       expect(camelCase("One TWO, three; FOUR")).to.equal('oneTwoThreeFour')
    });
   
    it("Pass null", () =>{
        expect(camelCase(null)).to.equal(null)
    });
})
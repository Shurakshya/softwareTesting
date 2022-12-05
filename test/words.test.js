import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect


describe("Words.js Testing", () => {

    it("Splting with different separators", () =>{
        expect(words("First, Second; Third Fourth"))
            .to.deep.equal(['First', 'Second', 'Third', 'Fourth'])
    });

    it("Splting with defined pattern", () =>{
        expect(words("First, Second; Third Fourth", /[^, ]+/g))
            .to.deep.equal(['First', 'Second;', 'Third', 'Fourth'])
    });

    it("Splting with defined pattern", () =>{
        expect(() => words(null))
            .to.throw("Cannot read properties of null (reading 'match')")
    });
})
import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe("Ceil.js Testing", () => {

    it("Round float value to 2 signs", () => {
        expect(ceil(20.123456, 2)).to.equal(20.13)
    });

    it("Round float value to 3 signs", () => {
        expect(ceil(20.123456, 3)).to.equal(20.124)
    });

    it("Default precision", () => {
        expect(ceil(20.12)).to.equal(21)
    });

    it("Round up integer", () => {
        expect(ceil(2001, -2)).to.equal(2100)
    });

    it("Pass null", () => {
        expect(ceil(null)).to.equal(0)
    });

    it("Pass string with number", () => {
        expect(ceil("24.002")).to.equal(25)
    });

    it("Pass string without number", () => {
        expect(ceil("text")).to.be.an.NaN
    });

})
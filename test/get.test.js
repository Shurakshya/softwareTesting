import chai from "chai"
import get from "../src/get.js"
const expect = chai.expect

describe("Get.js Testing", () => {

    var objToTest = {
        a: 2,
        b: "Hello",
        c: {
            c1: 20,
            c2: "world"
        },
        d: null,
    }

    it("Check for first level access", () => {
        expect(get(objToTest, "a")).to.equal(2)
    })

    it("Check for second level access", () => {
        expect(get(objToTest, "c.c1")).to.equal(20)
    })

    it("Object is null", () => {
        expect(get(null, "a")).to.equal(undefined)
    })

    it("Object is null with default value", () => {
        expect(get(null, "a", 0)).to.equal(0)
    })

    it("Objects member is null", () => {
        expect(get(objToTest, "d")).to.equal(null)
    })
})
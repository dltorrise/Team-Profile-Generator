const Intern = require("../lib/Intern")

describe("Intern", () => {

    //tests that the Intern object is created
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Intern();
        expect(typeof(obj)).toEqual("object");
        });
    })

    //tests that Intern object will return school passed into it
    describe("Intern school", () => {
        it("should return the school passed to it", () => {
        const school = "Northwestern"
        const obj = new Intern("John Doe", 1, "deetee@gmail.com", school)
        expect(obj.getSchool()).toEqual(school)
        })
    })

    //tests that the Intern class overwrote the role of the Employee class
    describe("Intern Role", () => {
        it("should return role to be 'Intern'", () => {
        const role = "Intern"
        const obj = new Intern("John Doe", 1, "deetee@gmail.com", "Northwestern")
        expect(obj.getRole()).toEqual(role)
        })
    })
})
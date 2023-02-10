const Intern = require("../lib/Intern")
//school, role
describe("Intern", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Intern();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    
    describe("Intern Role", () => {
        it("should return role to be 'Intern'", () => {
        const role = "Intern"
        const obj = new Intern("John Doe", 1, "deetee@gmail.com", "Northwestern")
        expect(obj.getRole()).toEqual(role)
        })
    })
    describe("Intern school", () => {
        it("should return the school passed to it", () => {
        const school = "Northwestern"
        const obj = new Intern("John Doe", 1, "deetee@gmail.com", school)
        expect(obj.getSchool()).toEqual(school)
        })
    })
})
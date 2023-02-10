const Engineer = require("../lib/Engineer")
//github
describe("Engineer", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Engineer();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    
    describe("Engineer Role", () => {
        it("should return role to be 'Engineer'", () => {
        const role = "Engineer"
        const obj = new Engineer("John Doe", 1, "deetee@gmail.com", "deetee")
        expect(obj.getRole()).toEqual(role)
        })
    })
    describe("Engineer github", () => {
        it("should return the github username passed to it", () => {
        const github = "dltorrise"
        const obj = new Engineer("John Doe", 1, "deetee@gmail.com", github)
        expect(obj.getGithub()).toEqual(github)
        })
    })
})


const Manager = require("../lib/Manager")

describe("Manager", () => {

    //tests that the Manager object is created
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Manager();

        expect(typeof(obj)).toEqual("object");
        });
    })
    
    //tests that Manager object will return office number passed into it
    describe("Manager Office Number", () => {
        it("should return the office number passed to it", () => {
        const officeNumber = "01"
        const obj = new Manager("John Doe", 1, "deetee@gmail.com", officeNumber)
        expect(obj.getOfficeNumber()).toEqual(officeNumber)
        })
    })

    //tests that the Manager class overwrote the role of the Employee class
    describe("Manager Role", () => {
        it("should return role to be 'Manager'", () => {
        const role = "Manager"
        const obj = new Manager("John Doe", 1, "deetee@gmail.com", 1)
        expect(obj.getRole()).toEqual(role)
        })
    })
})
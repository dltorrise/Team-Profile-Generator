const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization"), () => {
        it ("should return an object containing a 'string' property when called with the 'new' keyword", () => {
        const obj = new Employee();

        expect("string" in obj).toEqual(true);
        }
)}
    
    describe("Input"), () => {
        it("should only accept input that is two words: first and last name", () => {
        const name = "John Doe"
        const obj = new Employee(name)
        
        }
        )}
    


})

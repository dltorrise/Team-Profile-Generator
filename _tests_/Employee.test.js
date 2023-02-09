const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Employee();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    describe("Input", () => {
        it("should return string as a name", () => {
        const name = "John Doe"
        const obj = new Employee(name)
        expect(obj.name).toEqual(name);
        
        }
        )
    
    })

})

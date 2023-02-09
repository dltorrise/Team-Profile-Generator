const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Manager();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    describe("Input", () => {
        it("should return string as a name", () => {
        const name = "John Doe"
        const obj = new Manager(name)
        expect(obj.name).toEqual(name);
        
        }
        )
    
    })

})
const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Intern();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    describe("Input", () => {
        it("should return string as a name", () => {
        const name = "John Doe"
        const obj = new Intern(name)
        expect(obj.name).toEqual(name);
        
        }
        )
    
    })

})
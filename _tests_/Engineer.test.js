const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Engineer();

        expect(typeof(obj)).toEqual("object");
        }
        );
    })
    describe("Input", () => {
        it("should return string as a name", () => {
        const name = "John Doe"
        const obj = new Engineer(name)
        expect(obj.name).toEqual(name);
        
        }
        )
    
    })

})

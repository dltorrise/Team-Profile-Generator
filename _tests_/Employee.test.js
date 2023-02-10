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

    describe("Employee Role", () => {
        it("should return role to be 'Employee'", () => {
        const role = "Employee"
        const obj = new Employee(role)
        expect(obj.getRole()).toEqual(role)
        })
    })

    describe("Employee ID", () => {
        it("should return the ID passed to it", () => {
        const identification = 1
        const obj = new Employee("John Doe", identification, "deetee@gmail.com")
        expect(obj.getID()).toEqual(identification)
        })
    })

    describe("Employee email", () => {
        it("should return the email passed to it", () => {
        const email = "deetee@gmail.com"
        const obj = new Employee("John Doe", 1, email)
        expect(obj.getEmail()).toEqual(email)
        })
    })
})

//*IMPORTS*
const Employee = require("../lib/Employee")

//*TESTS*
describe("Employee", () => {

    //tests that the Employee object is created
    describe("Initialization", () => {
        it ("should create an object", () => {
        const obj = new Employee();
        expect(typeof(obj)).toEqual("object");
        });
    })

    //tests that Employee object will return project name passed into it
    describe("Project name", () => {
        it("should return project name passed into it", () => {
        const project = "Project"
        const obj = new Employee(project, "John Doe", 1, "deetee@gmail.com")
        expect(obj.getProject()).toEqual(project);
        })
    
    })

    //tests that Employee object will return employee name passed into it
    describe("Employee Name", () => {
        it("should return employee name passed into it", () => {
        const name = "John Doe"
        const obj = new Employee("Project", name, 1, "deetee@gmail.com")
        expect(obj.getName()).toEqual(name);
        })
    
    })
    
    //tests that Employee object will return id passed into it
    describe("Employee ID", () => {
        it("should return the ID passed into it", () => {
        const identification = 1
        const obj = new Employee("Project", "John Doe", identification, "deetee@gmail.com")
        expect(obj.getID()).toEqual(identification)
        })
    })

    //tests that Employee object will return email passed into it
    describe("Employee email", () => {
        it("should return the email passed into it", () => {
        const email = "deetee@gmail.com"
        const obj = new Employee("Project", "John Doe", 1, email)
        expect(obj.getEmail()).toEqual(email)
        })
    })

    //tests that Employee object will return correct role
    describe("Employee Role", () => {
        it("should return role to be 'Employee'", () => {
        const role = "Employee"
        const obj = new Employee("Project", "John Doe", 1, "deetee@gmail.com", role)
        expect(obj.getRole()).toEqual(role)
        })
    })
})

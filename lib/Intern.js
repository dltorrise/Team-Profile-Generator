//*IMPORTS*
const Employee = require("../lib/Employee")

//*CLASS CONSTRUCTOR*
//extending the Employee class
class Intern extends Employee {
    constructor(project, internName, internID, email, school) {
        super(project, internName, internID, email, school)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

//*EXPORTS
module.exports = Intern
//*IMPORTS*
const Employee = require("../lib/Employee")

//*CLASS CONSTRUCTOR*
//extending the Employee class
class Intern extends Employee {
    constructor(internName, internID, email, school) {
        super(internName, internID, email, school)
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
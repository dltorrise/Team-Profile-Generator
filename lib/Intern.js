//*IMPORTS*
//importing the employee class to extend it
const Employee = require('./Employee');

//extending the employee class
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
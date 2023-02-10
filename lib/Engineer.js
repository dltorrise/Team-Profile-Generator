//*IMPORTS*
const Employee = require("../lib/Employee")

//*CLASS CONSTRUCTOR*
//extending the Employee class
class Engineer extends Employee {
    constructor(project, engineerName, engineerID, email, github) {
        super(project, engineerName, engineerID, email, github)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

//*EXPORTS
module.exports = Engineer
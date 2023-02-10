//*IMPORTS*
//importing the employee class to extend it
const Employee = require('./Employee');

//extending the employee class
class Engineer extends Employee {
    constructor(github) {
        super(teamManagerName, teamManagerID, email)
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
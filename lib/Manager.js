//*IMPORTS*
//importing the employee class to extend it
const Employee = require('./Employee');

//extending the employee class
class Manager extends Employee {
    constructor(teamManagerName, teamManagerID, email, officeNumber) {
        super(teamManagerName, teamManagerID, email)
        this.officeNumber = officeNumber
        }
        getRole(){
            return "Manager"
        }
        getOfficeNumber() {
            return this.officeNumber
        }
        
    }

//*EXPORTS
module.exports = Manager

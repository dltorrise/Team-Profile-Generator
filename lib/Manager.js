//*IMPORTS*
const Employee = require("../lib/Employee")

//*CLASS CONSTRUCTOR*
//extending the Employee class
class Manager extends Employee {
    constructor(project, teamManagerName, teamManagerID, email, officeNumber) {
        super(project, teamManagerName, teamManagerID, email, officeNumber)
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

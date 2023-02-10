//*IMPORTS*
const Employee = require("../lib/Employee")

//*CLASS CONSTRUCTOR*
//extending the Employee class
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

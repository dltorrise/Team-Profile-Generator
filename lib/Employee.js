//*CLASS CONSTRUCTOR*
class Employee {
    constructor(project, name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        //added a project property so that the user can specify a project
        this.project = project   
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
    getProject() {
        return this.project
    }
}

//*EXPORTS
module.exports = Employee
// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.
// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// The other three classes will extend `Employee`.
// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

//*IMPORTS*
//importing the employee class to extend it
const Employee = require('./Employee');

//extending the employee class
class Engineer extends Employee {
    constructor(github) {
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
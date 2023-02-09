//*IMPORTS
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')


//*FUNCTIONS*
//generates the beginning of the html and also manager card
//uses bootstrap plugin
var htmlGenerate = function(){
    htmlFile = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Member's Profile</title>
</head>
<body>
    <h1>Team Members</h1>
    <div class="card">
    <h2>${Employee.getName()}</h2>
    <p>${Manager.getRole()}</p>
    <p>Employee ID: ${Employee.getID()}</p>
    <p>Office #: ${Employee.officeNumber}</p>
    <a href="${Employee.getEmail()}">Contact</p>
    </div>
    `
    return htmlFile
  } 

//if enduser decides to add an engineer will append this information to html
var htmlGenerateEngineer = function() {
    appendEngineer = `
    <div class="card">
    <h2>${Employee.getName()}</h2>
    <p>${Engineer.getRole()}</p>
    <p>Employee ID: ${Employee.getID()}</p>
    <a href="https://github.com/${Engineer.getGithub()}">Github Username: ${Engineer.getGithub()}</p>
    <a href="${Employee.getEmail()}">Contact</p>
    </div>
    `
    return appendEngineer
}

//if enduser decides to add an intern will appen this to information to html
var htmlGenerateIntern = function() {
    appendIntern = `
    <div class="card">
    <h2>${Employee.getName()}</h2>
    <p>${Intern.getRole()}</p>
    <p>Employee ID: ${Employee.getID()}</p>
    <p>University: ${Intern.getSchool()}</p>
    <a href="${Employee.getEmail()}">Contact</p>
    </div>`
    return appendIntern
}

//finished the html when enduser is finished adding members to team
var finishHTML = function() {
    appendEnd = `
    </body>
    </html>
    `
    return appendEnd
}

//*EXPORTS*
module.exports = {
    htmlGenerate,
    htmlGenerateEngineer,
    htmlGenerateIntern,
    finishHTML,
}
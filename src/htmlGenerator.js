//*IMPORTS
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')


//add margins
//loop over the array 
//have a template string


//*FUNCTIONS*
//generates the beginning of the html and also manager card
//uses bootstrap plugin
var htmlGenerate = function(manager){
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
<body class="d-flex flex-wrap justify-content-center">
    <h1 class="text-center .text-secondary">Team Members</h1>
    <div class="card border border-primary shadow-sm rounded">
    <h2 class="text-center">${manager.getName()}</h2>
    <p>${manager.getRole()}</p>
    <p>Employee ID: ${manager.getID()}</p>
    <p>Office #: ${manager.getOfficeNumber()}</p>
    <a href="${manager.getEmail()}">Contact</p>
    </div>
    `
    return htmlFile
  } 

//if enduser decides to add an engineer will append this information to html
var htmlGenerateEngineer = function(array) {
    appendEngineer = `
    <div class="card border border-primary shadow-sm rounded">
    <h2 class="text-center>${array.getName()}</h2>
    <p>${array.getRole()}</p>
    <p>Employee ID: ${array.getID()}</p>
    <a href="https://github.com/${array.getGithub()}">Github Username: ${array.getGithub()}</p>
    <a href="${array.getEmail()}">Contact</p>
    </div>
    `
    return appendEngineer
}

//if enduser decides to add an intern will appen this to information to html
var htmlGenerateIntern = function() {
    appendIntern = `
    <div class="card border border-primary shadow-sm rounded">
    <h2 class="text-center>${Employee.getName()}</h2>
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
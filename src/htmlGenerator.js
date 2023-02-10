//*FUNCTIONS*
//generates the beginning of the html and also manager card
//uses bootstrap plugin
var htmlGenerate = function(manager){
    htmlFile = `<!--Document generated in command line-->
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Member's Profile</title>
</head>
    <header>
    <h1 class="text-center .text-secondary">Team Members</h1>
    <h3 class="text-center">Below is information of all team members working on a project</h3>
    </header>
    <body>
        <main class="d-flex flex-wrap justify-content-center">
            <div class="card border border-primary">
                <h4 class="text-center">${manager.getName()}</h2>
                <p>${manager.getRole()}</p>
                <p>Employee ID: ${manager.getID()}</p>
                <p>Office #: ${manager.getOfficeNumber()}</p>
                <a href="${manager.getEmail()}">Contact</a>
            </div>
    `
    return htmlFile
  } 

//if enduser decides to add an engineer will append this information to html
var htmlGenerateEngineer = function(engineer) {
    appendEngineer = `
    <div class="card border border-primary">
        <h4 class="text-center">${engineer.getName()}</h2>
        <p>${engineer.getRole()}</p>
        <p>Employee ID: ${engineer.getID()}</p>
        <a href="https://github.com/${engineer.getGithub()}">Github Username: ${engineer.getGithub()}</a>
        <a href="${engineer.getEmail()}">Contact</a>
    </div>
    `
    return appendEngineer
}

//if enduser decides to add an intern will appen this to information to html
var htmlGenerateIntern = function(intern) {
    appendIntern = `
    <div class="card border border-primary">
        <h4 class="text-center">${intern.getName()}</h2>
        <p>${intern.getRole()}</p>
        <p>Employee ID: ${intern.getID()}</p>
        <p>University: ${intern.getSchool()}</p>
        <a href="${intern.getEmail()}">Contact</a>
    </div>`
    return appendIntern
}

//finished the html when enduser is finished adding members to team
var finishHTML = function() {
    appendEnd = `
    </main>
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
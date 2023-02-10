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
    <header class="my-3">
    <h1 class="text-center .text-secondary .bg-light">Team Members</h1>
    <h3 class="text-center">Information Regarding All of the Team Members</h3>
    </header>
    <body>
        <main class="d-flex flex-wrap justify-content-center">
            <div class="card border border-success border-3 w-25 p-3 mx-2 my-3 align-self-center text-center .bg-secondary">
                <h4>${manager.getName()}</h2>
                <p>${manager.getRole()}</p>
                <p>Employee ID: ${manager.getID()}</p>
                <p>Office #: ${manager.getOfficeNumber()}</p>
                <a class="my-1" href="mailto:${manager.getEmail()}? subject=Inquiry about Project">Contact</a>
            </div>
    `
    return htmlFile
  } 

//if enduser decides to add an engineer will append this information to html
var htmlGenerateEngineer = function(engineer) {
    appendEngineer = `
    <div class="card border border-primary border-3 w-25 p-3 mx-2 my-3 align-self-center text-center .bg-secondary">
        <h4>${engineer.getName()}</h2>
        <p>${engineer.getRole()}</p>
        <p>Employee ID: ${engineer.getID()}</p>
        <a class="my-1" href="https://github.com/${engineer.getGithub()}">Github Username: ${engineer.getGithub()}</a>
        <a class="my-1" href="mailto:${engineer.getEmail()}? subject=Inquiry about Project">Contact</a>
    </div>
    `
    return appendEngineer
}

//if enduser decides to add an intern will appen this to information to html
var htmlGenerateIntern = function(intern) {
    appendIntern = `
    <div class="card border border-info border-3 w-25 p-3 mx-2 my-3 align-self-center text-center .bg-secondary">
        <h4>${intern.getName()}</h2>
        <p>${intern.getRole()}</p>
        <p>Employee ID: ${intern.getID()}</p>
        <p>University: ${intern.getSchool()}</p>
        <a class="my-1" href="mailto:${intern.getEmail()}? subject=Inquiry about Project">Contact</a>
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
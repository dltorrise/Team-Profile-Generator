//*FUNCTIONS*
//generates the beginning of the html and also manager card
//uses bootstrap plugin
var htmlGenerate = function(manager){
    htmlFile = `<!--Document generated in command line-->
    <!DOCTYPE html>
<html lang="en" class="bg-secondary">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>${manager.getProject()}Team Members</title>
</head>
<div class="bg-secondary">
    <header class="my-3">
    <h1 class="text-center">Team Members</h1>
    <h3 class="text-center">Information Regarding All of the Team Members working on ${manager.getProject()}</h3>
    </header>
    <body>
        <main class="d-flex flex-wrap justify-content-center row">
            <div class="card border border-success border-3 w-25 p-3 mx-2 my-3 align-self-center text-center">
                <h4>${manager.getName()}</h4>
                <p>${manager.getRole()}</p>
                <p>Employee ID: ${manager.getID()}</p>
                <p>Office #: ${manager.getOfficeNumber()}</p>
                <a class="my-1" href="mailto: ${manager.getEmail()}">Send Email</a>
            </div>
    `
    return htmlFile
  } 

//if enduser decides to add an engineer will append this information to html
var htmlGenerateEngineer = function(engineers) {
    appendEngineer = `
    <div class="card border border-primary border-3 w-25 p-3 mx-2 my-3 align-self-center text-center">
        <h4>${engineers.getName()}</h4>
        <p>${engineers.getRole()}</p>
        <p>Employee ID: ${engineers.getID()}</p>
        <a class="my-1" href="https://github.com/${engineers.getGithub()}">Github Username: ${engineers.getGithub()}</a>
        <a class="my-1" href="mailto: ${engineers.getEmail()}">Send Email</a>
    </div>
    `
    return appendEngineer
}

//if enduser decides to add an intern will appen this to information to html
var htmlGenerateIntern = function(interns) {
    appendIntern = `
    <div class="card border border-info border-3 w-25 p-3 mx-2 my-3 align-self-center text-center">
        <h4>${interns.getName()}</h4>
        <p>${interns.getRole()}</p>
        <p>Employee ID: ${interns.getID()}</p>
        <p>University: ${interns.getSchool()}</p>
        <a class="my-1" href="mailto: ${interns.getEmail()}">Send Email</a>
    </div>`
    return appendIntern
}

//finished the html when enduser is finished adding members to team
var finishHTML = function() {
    appendEnd = `
    </main>
    </body>
    </div>
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
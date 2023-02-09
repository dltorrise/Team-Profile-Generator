var htmlGenerate = function(answers){
    htmlFile = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skeleton</title>
</head>
<body>
    <h1>Team Members</h1>
    <h2>${answers.teamManagerName}</h2>`
    return htmlFile
  } 

var htmlGenerateEngineer = function(answers) {
    appendEngineer = `
    <h2>${answers.engineerName}</h2>`
    return appendEngineer
}

var htmlGenerateIntern = function(answers) {
    appendIntern = `
    <h2>${answers.internName}</h2>`
    return appendIntern
}

var finishHTML = function() {
    appendEnd = `
    </body>
    </html>
    `
    return appendEnd
}

module.exports = {
    htmlGenerate,
    htmlGenerateEngineer,
    htmlGenerateIntern,
    finishHTML,
}
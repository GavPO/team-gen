const fs = require('fs');

const team = [];
var empDivArr = "";

function genTeamArray(emp) {
    team.push(emp)
};

function makeHTMLPage() {
    makeEmployeeCards();
    fs.writeFile('index.html', 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        ${empDivArr}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`, err => err ? console.log(err) : console.log("Page made"));

};

function makeEmployeeCards() {
    team.forEach((emp) => {
        if (emp.type === "Manager") {
            empDivArr+=`
            <div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${emp.id}</li>
                        <li class="list-group-item">Employee Email: <a href="mailto:${emp.email}?subject=Mail from our Website">${emp.email}</a></li>
                        <li class="list-group-item">Office Number: ${emp.officeNum}</li>
                    </ul>
                </div>
            </div>`
        } else if (emp.type === "Engineer") {
            empDivArr+=`
            <div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${emp.id}</li>
                        <li class="list-group-item">Employee Email: <a href="mailto:${emp.email}?subject=Mail from our Website">${emp.email}</a></li>
                        <li class="list-group-item">Engingeer Github: <a href="https://github.com/${emp.github}">${emp.github}</a></li>
                    </ul>
                </div>
            </div>`
        } else {
            empDivArr+=`
            <div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${emp.id}</li>
                        <li class="list-group-item">Employee Email: <a href="${emp.email}?subject=Mail from our Website">${emp.email}</a></li>
                        <li class="list-group-item">Intern's School: ${emp.school}</li>
                    </ul>
                </div>
            </div>`
        };
    });
    console.log(empDivArr);

    
};




module.exports = {genTeamArray, makeHTMLPage}
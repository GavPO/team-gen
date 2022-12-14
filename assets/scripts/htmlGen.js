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
        <link rel="stylesheet" href="./assets/styles/style.css">
    </head>
    <body>
        <header>
        <div class="jumbotron jumbotron-fluid text-center text-white bg-dark">
            <div class="container">
                <h1 class="display-4">Employee Roster</h1>
            </div>
        </div>
        </header>
        <div class="card-deck d-flex justify-content-center">${empDivArr}</div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`, err => err ? console.log(err) : console.log("Page made"));

};

function makeEmployeeCards() {
    team.forEach((emp) => {
        if (emp.type === "Manager") {
            empDivArr+=`
            <div class="card col-lg-2 col-md-12 text-center text-white bg-dark">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-white bg-dark">Employee ID: ${emp.id}</li>
                        <li class="list-group-item text-white bg-dark">Employee Email: <a href="${emp.email}">${emp.email}</a></li>
                        <li class="list-group-item text-white bg-dark">Office Number: ${emp.officeNum}</li>
                    </ul>
                </div>
            </div>`
        } else if (emp.type === "Engineer") {
            empDivArr+=`
            <div class="card col-lg-2 col-md-12 text-center text-white bg-dark">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-white bg-dark">Employee ID: ${emp.id}</li>
                        <li class="list-group-item text-white bg-dark">Employee Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
                        <li class="list-group-item text-white bg-dark">Engingeer Github: <a href="https://github.com/${emp.github}" target="_blank">${emp.github}</a></li>
                    </ul>
                </div>
            </div>`
        } else {
            empDivArr+=`
            <div class="card col-lg-2 col-md-12 text-center text-white bg-dark">
                <div class="card-body">
                    <h5 class="card-title">Employee Name: ${emp.name}</h5>
                    <p class="card-body">Employee Role: ${emp.type}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-white bg-dark">Employee ID: ${emp.id}</li>
                        <li class="list-group-item text-white bg-dark">Employee Email: <a href="${emp.email}">${emp.email}</a></li>
                        <li class="list-group-item text-white bg-dark">Intern's School: ${emp.school}</li>
                    </ul>
                </div>
            </div>`
        };
    });

    
};




module.exports = {genTeamArray, makeHTMLPage}
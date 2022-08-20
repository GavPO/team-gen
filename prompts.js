const inquirer = require('inquirer');
const {teamManagerQuestions, engineerQuestions, internQuestions} = require('./questions.js');
const {Manager, Engineer, Intern} = require('./constructors.js') 


function makeTeam() {
    let qNum = 0;
    const managerInfo = {};
    const teamRoster = [];

    async function askManagerQuestions() {
        let prompt = await inquirer
        .prompt({
            type: teamManagerQuestions[qNum].type,
            name: teamManagerQuestions[qNum].name,
            message: teamManagerQuestions[qNum].message,
            choices: teamManagerQuestions[qNum].choices
        })
        managerInfo[teamManagerQuestions[qNum].name] = prompt[teamManagerQuestions[qNum].name];
        qNum++
        if(qNum < teamManagerQuestions.length) {
            askManagerQuestions()
        } else {
            teamRoster.push(managerInfo);
            makeManager(managerInfo);
            if(managerInfo.empType === "engineer") {
                qNum = 0;
                const engineerInfo = {};
                askEngineerQuestions(qNum, engineerInfo)
            } else if(employeeInfo.empType === "intern") {
                qNum = 0;
                const internInfo = {};
                askInternQuestions(qNum, internInfo)
            } else {
                return;
            }
        }
    };

    async function askEngineerQuestions(qNum, engineerInfo) {
        let prompt = await inquirer
        .prompt({
            type: engineerQuestions[qNum].type,
            name: engineerQuestions[qNum].name,
            message: engineerQuestions[qNum].message,
            choices: engineerQuestions[qNum].choices
        })
        engineerInfo[engineerQuestions[qNum].name] = prompt[engineerQuestions[qNum].name];
        qNum++
        if(qNum < engineerQuestions.length) {
            askEngineerQuestions(qNum, engineerInfo);
        } else {
            teamRoster.push(engineerInfo);
            makeEngineer(engineerInfo)
            if (engineerInfo.anotherEmp === "engineer") {
                qNum = 0;
                engineerInfo = {};
                askEngineerQuestions(qNum, engineerInfo);
            } else if (engineerInfo.anotherEmp === "intern") {
                qNum = 0;
                internInfo = {};
                askInternQuestions(qNum, internInfo);
            } else {
                console.log(teamRoster);
            }
        }
    };

    async function askInternQuestions(qNum, internInfo) {
        let prompt = await inquirer
        .prompt({
            type: internQuestions[qNum].type,
            name: internQuestions[qNum].name,
            message: internQuestions[qNum].message,
            choices: internQuestions[qNum].choices
        })
        internInfo[internQuestions[qNum].name] = prompt[internQuestions[qNum].name];
        qNum++
        if(qNum < engineerQuestions.length) {
            askInternQuestions(qNum, internInfo);
        } else {
            teamRoster.push(internInfo);
            makeIntern(internInfo);
            if (internInfo.anotherEmp === "engineer") {
                qNum = 0;
                engineerInfo = {};
                askEngineerQuestions(qNum, engineerInfo);
            } else if (internInfo.anotherEmp === "intern") {
                qNum = 0;
                internInfo = {};
                askInternQuestions(qNum, internInfo);
            } else {
                console.log(teamRoster);
            }
        }
    };

    askManagerQuestions();
};

function makeManager(emp) {
    const teamManager = new Manager(emp.fullName, emp.empID, emp.email, "Manager", emp.number)
    console.log(teamManager);
}

function makeEngineer(emp) {
    const newEngineer = new Engineer(emp.fullName, emp.empID, emp.email, "Engineer", emp.github)
    console.log(newEngineer);
};

function makeIntern(emp) {
    const newIntern = new Intern(emp.fullName, emp.empID, emp.email, "Intern", emp.school)
    console.log(newIntern);
};

module.exports = {makeTeam}
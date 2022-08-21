const inquirer = require('inquirer');
const {teamManagerQuestions, engineerQuestions, internQuestions} = require('./questions.js');
const {Manager, Engineer, Intern} = require('./constructors.js') 
const {genTeamArray, makeEmployeeCards} = require('./htmlGen.js')


function makeTeam() {
    let qNum = 0;
    const managerInfo = {};

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
            makeManager(managerInfo);
            if(managerInfo.empType === "engineer") {
                qNum = 0;
                const engineerInfo = {};
                askEngineerQuestions(qNum, engineerInfo)
            } else if(managerInfo.empType === "intern") {
                qNum = 0;
                const internInfo = {};
                askInternQuestions(qNum, internInfo)
            } else {
                makeEmployeeCards();
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
                makeEmployeeCards();
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
                makeEmployeeCards();
            }
        }
    };

    askManagerQuestions();
};

function makeManager(emp) {
    const teamManager = new Manager(emp.fullName, emp.empID, emp.email, "Manager", emp.number)
    genTeamArray(teamManager);
}

function makeEngineer(emp) {
    const newEngineer = new Engineer(emp.fullName, emp.empID, emp.email, "Engineer", emp.github)
    genTeamArray(newEngineer);
};

function makeIntern(emp) {
    const newIntern = new Intern(emp.fullName, emp.empID, emp.email, "Intern", emp.school)
    genTeamArray(newIntern);
};

module.exports = {makeTeam}
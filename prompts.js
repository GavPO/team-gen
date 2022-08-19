const inquirer = require('inquirer');
const {teamManagerQuestions, engineerQuestions, internQuestions} = require('./questions.js');
const {Manager, Engineer, Intern} = require('./constructors.js') 


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
                let qNum = 0;
                const engineerInfo = {};
                async function askEngineerQuestions() {
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
                        askEngineerQuestions();
                    } else {
                        console.log("hello",engineerInfo);
                    }
                }
            askEngineerQuestions()
            } else if(employeeInfo.empType === "intern") {
                let qNum = 0;
                const internInfo = {};
                async function askInternQuestions() {
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
                        askInternQuestions();
                    } else {
                        console.log(internInfo);
                    }
                }
            askInternQuestions()
            } else {
                return;
            }
        }
    }
    askManagerQuestions();
};

function makeManager(emp) {
    const teamManager = new Manager(emp.fullName, emp.empID, emp.email, emp.number)
    console.log(teamManager);
}

function makeEngineer(emp) {

};

function makeIntern(emp) {

};

module.exports = {makeTeam}
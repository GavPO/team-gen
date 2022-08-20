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
                        teamRoster.push(engineerInfo);
                        console.log(engineerInfo);
                        if (engineerInfo.anotherEmp === "engineer") {
                            askEngineerQuestions();
                        } else if (engineerInfo.anotherEmp === "intern") {
                            askInternQuestions();
                        } else {
                            return;
                        }
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
                        teamRoster.push(internInfo);
                        console.log(internInfo);
                        if (internInfo.anotherEmp === "engineer") {
                            askEngineerQuestions();
                        } else if (internInfo.anotherEmp === "intern") {
                            askInternQuestions();
                        } else {
                            return;
                        }
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
    const teamManager = new Manager(emp.fullName, emp.empID, emp.email, "Manager", emp.number)
    console.log(teamManager);
}

function makeEngineer(emp) {
    const newEngineer = new Engineer(emp.fullName, emp.empID, emp.email, "Engineer", emp.github)
};

function makeIntern(emp) {
    const newIntern = new Intern(emp.fullName, emp.empID, emp.email, "Intern", emp.school)
};

module.exports = {makeTeam}
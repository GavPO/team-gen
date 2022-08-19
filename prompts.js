const inquirer = require('inquirer');
const {teamManagerQuestions, engineerQuestions, internQuestions} = require('./questions.js');


function makeTeam() {
    let qNum = 0;
    async function firstQuestions() {
        await inquirer
        .prompt({
            type: teamManagerQuestions[qNum].type,
            name: teamManagerQuestions[qNum].name,
            message: teamManagerQuestions[qNum].message
        })
        qNum++
        if(qNum < teamManagerQuestions.length) {
            firstQuestions()
        } else {
            
        } 
    };
    async function makeEngineer() {

    };
    async function makeIntern() {

    };
    firstQuestions();
};


module.exports = {makeTeam}
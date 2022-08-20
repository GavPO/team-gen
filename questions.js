const teamManagerQuestions = [
    {
        type: "input",
        name: "fullName",
        message: "What is your full name?"
    },    {
        type: "input",
        name: "empID",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "number",
        message: "What is your office number?"
    },
    {
        type: "list",
        name: "empType",
        message: "What kind of employee are you adding?",
        choices: ["engineer", "intern", "none"]
    }
];


const engineerQuestions = [
    {
        type: "input",
        name: "fullName",
        message: "What is your engineer's full name?"
    },
    {
        type: "input",
        name: "empID",
        message: "What is your engineer's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub?"
    },
    {
        type: "list",
        name: "anotherEmp",
        message: "Are you adding another engineer/intern?",
        choices: ["engineer", "intern", "no"]
    }
];

const internQuestions = [
    {
        type: "input",
        name: "fullName",
        message: "What is your intern's full name?"
    },
    {
        type: "input",
        name: "empID",
        message: "What is your interns's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your interns's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of your interns's School?"
    },
    {
        type: "list",
        name: "anotherEmp",
        message: "Are you adding another engineer/intern?",
        choices: ["engineer", "intern", "no"]
    }
]

module.exports = {teamManagerQuestions,
    engineerQuestions,
    internQuestions};
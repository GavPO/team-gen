const team = [];

function genTeam(emp) {
    team.push(emp)
    console.log(team);
    rollCall(team);
};

function rollCall(employees) {
    employees.forEach((emp) => {
        console.log(emp.getName());
    });

    
};

module.exports = {genTeam}
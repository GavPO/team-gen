class Employee {
    constructor(name, id, email, type) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = type;
    };

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.type;
    };
};

class Manager extends Employee {
    constructor(name, id, email, type, num) {
        super(name, id, email, type);
        this.officeNum = num;
    };
};

class Engineer extends Employee {
    constructor(name, id, email, type, github) {
        super(name, id, email, type);
        this.github = github;
    };

    getGitHub() {
        return this.github;
    }
};

class Intern extends Employee {
    constructor(name, id, email, type, school) {
        super(name, id, email, type);
        this.school = school;
    };

    getSchool() {
        return this.school;
    }
};

module.exports = {Employee, Manager, Engineer, Intern};
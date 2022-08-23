const {Employee, Manager, Engineer, Intern} = require('../assets/scripts/constructors');

describe('Employee', () => {
        it("should return an object containing a name, id, email, and type.", () => {
            const empObj = new Employee("Gavin", "1", "gavin@fakemail.com", "Employee");
            expect(new Employee("Gavin", "1", "gavin@fakemail.com", "Employee")).toEqual(empObj)
        });
    });   
    
describe('Manager', () => {
    it("should return an object containing a name, id, email, type, and office number.", () => {
        const mangObj = new Manager("Gavin", "1", "gavin@fakemail.com", "Manager");
        expect(new Manager("Gavin", "1", "gavin@fakemail.com", "Manager")).toEqual(mangObj)
    });

});

describe('Engineer', () => {
    it("should return an object containing a name, id, email, type, and GitHub.", () => {
        const engObj = new Engineer("Gavin", "1", "gavin@fakemail.com", "Engineer");
        expect(new Engineer("Gavin", "1", "gavin@fakemail.com", "Engineer")).toEqual(engObj)
    });
});

describe('Intern', () => {
    it("should return an object containing a name, id, email, type, and school.", () => {
        const intObj = new Intern("Gavin", "1", "gavin@fakemail.com", "Intern");
        expect(new Intern("Gavin", "1", "gavin@fakemail.com", "Intern")).toEqual(intObj)
    });
})

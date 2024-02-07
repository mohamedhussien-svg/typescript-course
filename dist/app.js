"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department id :- ${this.id}, name :- ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(`Employees Count ${this.employees.length} , ${this.employees}`);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.describe();
accounting.addEmployee('Mohamed');
accounting.addEmployee('Ahmed');
accounting.addEmployee('Hussein');
accounting.printEmployeeInfo();
console.log(accounting);
// const accountingCopy: Department = {employees: [],
//     name: 'HR',
//     describe: accounting.describe};
// console.log(accountingCopy);
// accountingCopy.describe();

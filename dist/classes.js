"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(`Employees Count ${this.employees.length} , ${this.employees}`);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2024;
const employee = Department.createEmployee('Mahmoud');
console.log(Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department', this);
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this._lastReport = reports[0];
    }
    static getInstance() {
        if (!Accounting.instance) {
            Accounting.instance = new Accounting('d2', []);
        }
        return Accounting.instance;
    }
    get lastReport() {
        if (this._lastReport) {
            return this._lastReport;
        }
        throw new Error('no reports for now');
    }
    set lastReport(value) {
        if (value) {
            this.addReports(value);
        }
        throw new Error('please add valid report');
    }
    addReports(report) {
        this.reports.push(report);
        this._lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === 'Ali') {
            return;
        }
        this.employees.push(employee);
    }
    describe() {
        console.log('Accounting Department', this);
    }
}
const itDepartment = new ITDepartment('d1', ['Mohamed']);
itDepartment.describe();
itDepartment.addEmployee('Mohamed');
itDepartment.addEmployee('Ahmed');
itDepartment.addEmployee('Hussein');
itDepartment.printEmployeeInfo();
console.log(itDepartment);
const accounting = Accounting.getInstance();
accounting.addReports('Something went wrong');
accounting.printReports();
accounting.lastReport = '2nd report';
console.log(accounting.lastReport);
// const accountingCopy: Department = {employees: [],
//     name: 'HR',
//     describe: accounting.describe};
// console.log(accountingCopy);
// accountingCopy.describe();

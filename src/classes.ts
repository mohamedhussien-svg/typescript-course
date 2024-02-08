abstract class Department {
    static fiscalYear: number = 2024;
    protected employees: string[] = [];

    protected constructor(private readonly id: string, public name: string) {
    }

    abstract describe(this: Department): void ;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(this: Department) {
        console.log(`Employees Count ${this.employees.length} , ${this.employees}`)
    }

    static createEmployee(name: string) {
        return {name: name};
    }

}

const employee = Department.createEmployee('Mahmoud');
console.log(Department.fiscalYear);

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe(): void {
        console.log('IT Department', this)
    }
}

class Accounting extends Department {
    private _lastReport: string;
    private static instance: Accounting;

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this._lastReport = reports[0];
    }

    static getInstance() {
        if (!Accounting.instance) {
            Accounting.instance = new Accounting('d2', []);
        }
        return Accounting.instance;
    }

    get lastReport(): string {
        if (this._lastReport) {
            return this._lastReport;
        }
        throw new Error('no reports for now');
    }

    set lastReport(value: string) {
        if (value) {
            this.addReports(value);
        }
        throw new Error('please add valid report');
    }

    addReports(report: string) {
        this.reports.push(report);
        this._lastReport = report;
    }

    printReports() {
        console.log(this.reports)
    }

    addEmployee(employee: string) {
        if (employee === 'Ali') {
            return;
        }
        this.employees.push(employee);
    }

    describe(): void {
        console.log('Accounting Department', this)
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

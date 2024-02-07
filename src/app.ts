class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department id :- ${this.id}, name :- ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(this: Department) {
        console.log(`Employees Count ${this.employees.length} , ${this.employees}`)
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

abstract class Department {
    // private readonly id: string
    // private name: string;
    static fiscalYear = 2022;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
} 

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment('d1', ["John", "Anna"]);

IT.addEmployee('Max');
IT.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

IT.describe();
IT.printEmployeeInformation();

console.log(IT);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.addReport('Something went wrong...');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.printEmployeeInformation();

// accounting.printReports();

accounting.mostRecentReport = 'XDD';
accounting.describe();
console.log(accounting.mostRecentReport);

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
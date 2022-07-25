"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.name = n;
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// private readonly id: string
// private name: string;
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(report) {
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

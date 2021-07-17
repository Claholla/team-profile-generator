// Document dependency
const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

// Tests Employee.js object and property creation
describe("Employee", () => {
    it("Should create an employee object", () => {
        const testEmployeeObj = new Employee();
        expect(typeof (testEmployeeObj)).toEqual("object");
    });

    it("Should set Employee's name property", () => {
        const employeeName = "Clay";
        const testName = new Employee(employeeName);
        expect(testName.name).toBe(employeeName);
    });

    it("Should set Employee's ID number property", () => {
        const employeeId = 2;
        const testId = new Employee("Clay", employeeId);
        expect(testId.id).toEqual(employeeId);
    });

    it("Should set Employee's Email property", () => {
        const employeeEmail = "claholla@gmail.com";
        const testEmail = new Employee("Clay", 2, employeeEmail);
        expect(testEmail.email).toBe(employeeEmail);
    });
});

// Tests exported functions from Employee object
describe("Export Functions", () => {
    it("Should use getName to return an Employee's Name property", () => {
        const name = "Johnny";
        const returnedName = new Employee(name);
        expect(returnedName.getName()).toBe(name);
    });

    it("Should use getId to return an Employee's id property", () => {
        const id = 22;
        const returnedId = new Employee("Johnny", id);
        expect(returnedId.getId()).toEqual(id);
    });

    it("Should use getEmail to return an Employee's Email property", () => {
        const email = "johnny@johnrulez.com";
        const returnedEmail = new Employee("Johnny", 22, email);
        expect(returnedEmail.getEmail()).toBe(email);
    });

    it("Should use getRole to return 'Employee'", () => {
        const role = "Employee";
        const returnRole = new Employee("Johnny", 22, "johnny@johnruelz.com", role);
        expect(returnRole.getRole()).toBe(role);
    });
});
// Document dependencies
const { it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    it("Should set Manager's officeNumber property", () => {
        const managerOfficeNumber = 222;
        const returnedManagerOfficeNumber = new Manager("Clay", 22, "claholla@gmail.com", managerOfficeNumber);
        expect(returnedManagerOfficeNumber.officeNumber).toBe(managerOfficeNumber);
    });
});

describe("Exported Functions", () => {
    it("Should use getOfficeNumber to return Manager's office number", () => {
        const managerOn = "3980";
        const returnedManagerOn = new Manager("Clay", 22, "claholla@gmail.com", managerOn);
        const functionTest = returnedManagerOn.getOfficeNumber();
        expect(functionTest).toBe(managerOn);
    });
});
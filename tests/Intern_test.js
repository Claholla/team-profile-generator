// Document dependencies
const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    it("Should set Intern's school property", () => {
        const internSchool = "University of Minnesota";
        const returnedInternSchool = new Intern("Clay", 22, "claholla@gmail.com", internSchool);
        expect(returnedInternSchool.internSchool).toBe(internSchool);
    });
});

describe("Exported Functions", () => {
    it("Should use getSchool to return Intern's school name", () => {
        const internSchoolName = "University of Minnesota";
        const returnedSchoolName = new Intern("Clay", 22, "claholla@gmail.com", internSchoolName);
        const functionTest = returnedSchoolName.getSchool();
        expect(functionTest).toBe(internSchoolName);
    })
})
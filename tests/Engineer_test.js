// Document dependencies
const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    it("Should set Engineer's github property", () => {
        const github = "Claholla";
        const returnedGithub = new Engineer("Name", 22, "claholla@gmail.com", github);
        expect(returnedGithub.github).toBe(github);
    });
});

describe("exportedFunctions", () => {
    it("Should use getGithub to return Engineer's github username", () => {
        const githubUn = "Claholla";
        const returnedGithubUn = new Engineer("Claholla", 22, "claholla@gmail.com", githubUn);
        const functionTest = returnedGithubUn.getGithub();
        expect(returnedGithubUn).toBe(githubUn);
    });
});
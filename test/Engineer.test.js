// Document dependencies
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should set Engineer's github property", () => {
        const github = "Claholla";
        const returnedGithub = new Engineer("Clay", 22, "claholla@gmail.com", github);
        expect(returnedGithub.github).toBe(github);
    });
});

describe("exportedFunctions", () => {
    it("Should use getGithub to return Engineer's github username", () => {
        const githubUn = "Claholla";
        const returnedGithubUn = new Engineer("Clay", 22, "claholla@gmail.com", githubUn);
        const functionTest = returnedGithubUn.getGithub();
        expect(functionTest).toBe(githubUn);
    });
});
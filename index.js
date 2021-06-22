// Document Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const employeeReq = require("./lib/Employee.js");
const engineerReq = require("./lib/Engineer.js");
const internReq = require("./lib/Intern.js");
const managerReq = require("./lib/Manager.js");
const generateMarkdown = require("./dist/generateMarkdown.js");

// Array for storage of generated team members
const teamMembers = [];

// Parent class for extended employee role objects
const employee =

// Initial function to determine Manager attributes
const manager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officenumber",
            message: "What is the manager's office number?"
        },
    ]);
    addTeam();
};

// function adds an Engineer to the team roster through user input prompts
const engineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee id number?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        },
    ]);
};

// function adds an Intern to the team roster through user input prompts
const intern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee id number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the engineer's name?",
        },
    ]);
};

// Adds additional team members after the initial manager profile is created
const addTeam = () => {
    return inquirer.prompt([
        {
           type: "list",
           name: "employeeType",
           message: "Which type of employee would you like to add to your team?",
           choices: ["Engineer", "Intern", "Stop adding team members"],
        },
    ]).then(({ choice }) => {
        switch (choice) {
          case "Engineer":
            engineer();
            break;
          case "Intern":
            intern();
            break;
          default:
            team();
            break;
        }
    });
};

// Runs the initial manager inquirer prompt
manager()
    .then(addTeam)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .catch(err => {
        console.log(err);
    });
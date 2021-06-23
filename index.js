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

// Initial function to determine Manager attributes
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ]);
};

// function adds an Engineer to the team roster through user input prompts
const addEngineer = () => {
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
const addIntern = () => {
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
    ]).then(({choice}) => {
        switch (choice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            fillTeam();
            break;
        }
    });
};

// Runs the initial manager inquirer prompt
addManager()
    .then(addTeam)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    }) 
    .catch(err => {
        console.log(err);
    });
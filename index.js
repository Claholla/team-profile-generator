// Document Dependencies
// File System
const fs = require("fs");
// npm installs
const inquirer = require("inquirer");
const jest = require("jest");
// employee class libraries
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// markdown generation to render HTML page
const generateMarkdown = require("./dist/generateMarkdown.js");

// Array for storage of generated team members
const teamMembers = [];

// Function to build HTML document through stored teamMembers array data
const fillTeam = () => {
    fs.writeFile(path.join(__dirname, "/dist/index.html"), generateMarkdown(teamMembers), function (err) {
        throw err;
    });
};

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

// Runs the initial manager inquirer prompt and logs the inquirer data to the teamMembers array
const start = () => {
    addManager()
        .then((answers) => {
            const managerLog = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            // adds the manager data to the teamMembers array
            teamMembers.push(managerLog);
            console.log("Manager successfully added to team roster!");
            // runs function to create and log additional team members
            addTeam();
        });
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

// Runs the engineer inquirer prompts and logs the created engineer to the teamMembers array 
const newEngineer = () => {
    addEngineer()
        .then((answers) => {
            const engineerLog = new Engineer(answers.name, answers.id, answers.github);
            // adds the engineer data to the teamMembers array
            teamMembers.push(engineerLog);
            console.log("Engineer successfully added to team roster!");
            // runs function to create and log additional team members
            addTeam();
        });
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
            message: "What school is the intern attending?",
        },
    ]);
};

// Runs the intern inquirer prompts and logs the created intern to the teamMembers array 
const newIntern = () => {
    addIntern()
        .then((answers) => {
            const internLog = new Intern(answers.name, answers.id, answers.email, answers.school);
            // adds the engineer data to the teamMembers array
            teamMembers.push(internLog);
            console.log("Intern successfully added to team roster!");
            // runs function to create and log additional team members
            addTeam();
        });
};


// Adds additional team members after the initial manager profile is created
const addTeam = () => {
    inquirer.prompt([
        {
           type: "list",
           name: "employeeType",
           message: "Which type of employee would you like to add to your team?",
           choices: ["Engineer", "Intern", "Stop adding team members"],
        },
    ]).then(({choice}) => {
        switch (choice) {
          case "Engineer":
            newEngineer();
            break;
          case "Intern":
            newIntern();
            break;
          default:
            fillTeam();
            break;
        }
    });
};

start();
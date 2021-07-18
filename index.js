// Document Dependencies
// File System
const fs = require("fs");
const path = require("path");
// npm installs
const inquirer = require("inquirer");
const jest = require("jest");
// employee class libraries
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Array for storage of generated team members
const teamMembers = [];

// Function to build HTML document through stored teamMembers array data
const fillTeam = () => {
    fs.writeFile(path.join(__dirname, "/dist/example.html"), generateMarkdown(teamMembers), function (error) {
        if (error) throw error;
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
    ]).then((answers) => {
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
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        },
    ]).then((answers) => {
        const engineerLog = new Engineer(answers.name, answers.id, answers.email, answers.github);
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
    ]).then((answers) => {
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
           choices: ["Engineer", "Intern", "Stop adding team members"]
        },
    ]).then((answers) => {
        switch (answers.employeeType) {
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

const generateMarkdown = (data) => {
    return `<!DOCTYPE HTML>
    <html lang="en-us">
    <head>
    <meta charset="UTF-8">
    <meta name= "viewport" content= "width=device-width, initial-scale= 1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron text-white bg-success">
            <div class="container">
                <h1 class="display-3">Team Roster</h1>
            </div>
        </div>
        <div class="container">
            <div class="row gy-5 justify-content-center">
                ${teamRosterArray(data)}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    </body>
    </html>`
};

/*
Parses the data contained within teamMembers and allows for direct access
to individual datum points within the array
*/
const teamRosterArray = (data) => {
    const roster = data.map((datum) => {
        // Statement uses getRole function to determine case based on returned role value
        switch (datum.getRole()) {
            
            case "Manager":
                return `
                <div class="col-4 py-4">    
                    <div class="card text-white bg-dark">
                        <div class="card-header">${datum.getRole()}</div>
                            <div class="card-body">
                                <h5 class="card-title">${datum.getName()}</h5>
                                <ul class="card-text">
                                    <li>ID: ${datum.getId()}</li>    
                                    <li>Email: <a href="mailto:${datum.getEmail()}">${datum.getEmail()}</a></li>
                                    <li>Office Number: ${datum.getOfficeNumber()}</li>
                                </ul>
                            </div>
                    </div>
                </div>`
                

            case "Engineer":
                return `
                <div class="col-4 py-4">    
                    <div class="card text-white bg-dark">
                        <div class="card-header">${datum.getRole()}</div>
                            <div class="card-body">
                                <h5 class="card-title">${datum.getName()}</h5>
                                <ul class="card-text">
                                    <li>ID: ${datum.getId()}</li>    
                                    <li>Email: <a href="mailto:${datum.getEmail()}">${datum.getEmail()}</a></li>
                                    <li>Github: <a href="http://www.github.com/${datum.getGithub()}">${datum.getGithub()}</a></li>
                                </ul>
                            </div>
                    </div>
                </div>`

            case "Intern":
                return `
                <div class="col-4 py-4">    
                    <div class="card text-white bg-dark">
                        <div class="card-header">${datum.getRole()}</div>
                            <div class="card-body">
                                <h5 class="card-title">${datum.getName()}</h5>
                                <ul class="card-text">
                                    <li>ID: ${datum.getId()}</li>    
                                    <li>Email: <a href="mailto:${datum.getEmail()}">${datum.getEmail()}</a></li>
                                    <li>School: ${datum.getSchool()}</li>
                                </ul>
                            </div>
                    </div>
                </div>`

            default:
                break;
        }
    });
    return roster.join("\n");  
};

addManager();
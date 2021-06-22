// Document Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const employee = require("./lib/Employee.js");
const engineer = require("./lib/Engineer.js");
const intern = require("./lib/Intern.js");
const manager = require("./lib/Manager.js");
const generateMarkdown = require("./dist/generateMarkdown.js");

// Array for storage of generated team members
const teamMembers = [];


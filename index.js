const generateTable = require('./utils/generateTable')
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        message: "Employee Name:",
        name: "employee"
    },
    {
        type: "list",
        message: "What role are they?",
        name: "role",
        choices: ["Employee", "Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        message: "Employee Name:",
        name: "employee2"
    },
    {
        type: "list",
        message: "What role are they?",
        name: "role2",
        choices: ["Employee", "Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        message: "Employee Name:",
        name: "employee3"
    },
    {
        type: "list",
        message: "What role are they?",
        name: "role3",
        choices: ["Employee", "Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        message: "Employee Name:",
        name: "employee4"
    },
    {
        type: "list",
        message: "What role are they?",
        name: "role4",
        choices: ["Employee", "Manager", "Engineer", "Intern"]

    }

    
]) 

    .then((anwsers) => {
    const makeTable = generateTable(anwsers)
    fs.writeFile("./utils/product.html", makeTable , (err) => 
        err ? console.error(err) : console.log("Success!")
    );

});
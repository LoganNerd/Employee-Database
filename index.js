const generateTable = require('./utils/generateTable')
const inquirer = require('inquirer');
const fs = require('fs');

const employeeData = [];

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Employee Name:",
            name: "name"
        },
        {
            type: "list",
            message: "What role are they?",
            name: "role",
            choices: ["Employee", "Manager", "Engineer", "Intern"]
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "addAnother"
        }
    ]) 
    .then((answers) => {
        employeeData.push({
            name: answers.name,
            role: answers.role
        });

        if (answers.addAnother) {
            addEmployee();
        } else {
            const makeTable = generateTable(employeeData);
            fs.writeFile("./utils/product.html", makeTable , (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Success!");
                }
            });
        }
    });
}

addEmployee();
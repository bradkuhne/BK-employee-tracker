require('dotenv').config();

const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
var confirm = require('inquirer-confirm');

const db = mysql.createConnection(
    {
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW

    },
    console.log("You have connected to the database for the BK Employee Tracker: " + process.env.DB_Name)
);
function askQuestions() {
    inquirer.prompt([{
        type: 'list',
        name: 'option',
        choices: [{
            name: 'View all departments',
            value: 'viewDepartments'
        }, {
            name: 'View all roles',
            value: 'viewRoles'
        }, {
            name: 'View all employees',
            value: 'viewEmployees'
        }, {
            name: 'Add a department',
            value: 'addDepartment'
        },
        ]
    }])
        .then(answer => {
            switch (answer.option) {
                case "viewDepartments":
                    db.query('SELECT * FROM department', function (err, results) {
                        console.table(results);
                        confirmCont();
                    });
                    break;
                case "viewRoles":
                    db.query('SELECT * FROM roles', function (err, results) {
                        console.table(results);
                        confirmCont();
                    });
                    break;
                case "viewEmployees":
                    db.query('SELECT * FROM employee', function (err, results) {
                        console.table(results);
                        confirmCont();
                    });
                    break;
                case "addDepartment":
                    inquirer
                        .prompt({
                            type: 'input',
                            message: 'What is the name of the department to add:',
                            name: 'newDept'
                        })
                        .then((answers) => {
                            newDept = answers.newDept
                            db.query(`INSERT INTO department (name) VALUES ("${newDept}");`, function (err, results) {
                                console.log(newDept + " has been added to the department table");
                                if (err) throw err;
                                console.log("1 record inserted")
                                confirmCont();
                            });
                        })
                    break;
                default:
                    console.log("No valid option chosen.");
            }
        });
};
function confirmCont() {
    confirm("Would you like to continue?")
        .then(function confirmed() {
            askQuestions();
        }, function cancelled() {
            console.log("Have a great day!  Goodbye!");
        });
};


askQuestions();

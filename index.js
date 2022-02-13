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
            name: 'Add a new department',
            value: 'addDepartment'
        }, {
            name: 'Add a new role',
            value: 'addRole'
        }, {
            name: 'Add a new employee',
            value: 'addEmployee'
        },
        {
            name: 'Update an existing employee',
            value: 'updateEmployee'
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
                case "addRole":
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is the name of the role to add:',
                                name: 'newRole',
                            },
                            {
                                type: 'input',
                                message: 'What is the salary for the role to add:',
                                name: 'newSalary',
                            },
                            {
                                type: 'input',
                                message: 'What is the dept id for the role to add:',
                                name: 'newDeptId',
                            },
                        ])
                        .then((answers) => {
                            newRole = answers.newRole
                            newSalary = answers.newSalary
                            newDeptId = answers.newDeptId
                            db.query(`INSERT INTO roles (title, salary, department_id) 
                            VALUES ("${newRole}", "${newSalary}", ${newDeptId});`, function (err, results) {
                                console.log(newRole + " has been added to the role table");
                                if (err) throw err;
                                console.log("1 record inserted")
                                confirmCont();
                            });
                        })
                    break;
                case "addEmployee":
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'What is the first name of the employee to add:',
                                name: 'newFName',
                            },
                            {
                                type: 'input',
                                message: 'What is the last name for the employee to add:',
                                name: 'newLName',
                            },
                            {
                                type: 'input',
                                message: 'What is the role id for the employee to add:',
                                name: 'newRoleId',
                            },
                            {
                                type: 'input',
                                message: 'What is the manager id of the employee to add:',
                                name: 'newMgrId',
                            },
                        ])
                        .then((answers) => {
                            newFName = answers.newFName
                            newLName = answers.newLName
                            newRoleId = answers.newRoleId
                            newMgrId = answers.newMgrId
                            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                                VALUES ("${newFName}", "${newLName}",${newRoleId}, ${newMgrId});`,
                                function (err, results) {
                                    console.log(newFName + " " + newLName + " has been added to the employee table");
                                    if (err) throw err;
                                    console.log("1 record inserted")
                                    confirmCont();
                                });
                        })
                    break;
                    case "updateEmployee":
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    message: 'What is the id of the employee to update',
                                    name: 'targetEmpId',
                                },
                                {
                                    type: 'input',
                                    message: 'What is the updated role id for the employee:',
                                    name: 'updatedRoleId',
                                },
                            ])
                            .then((answers) => {
                                targetEmpId = answers.targetEmpId
                                updatedRoleId = answers.updatedRoleId
                                db.query (`UPDATE employee SET role_id = ${updatedRoleId} 
                                    WHERE id = ${targetEmpId}`,
                                    function (err, results) {
                                        console.log("Employee # " + targetEmpId + " has been changed to role " + updatedRoleId);
                                        if (err) throw err;
                                        console.log("1 record updated")
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

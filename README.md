# BK-employee-tracker
Command line NodeJS / MySQL app to easily manage departments, roles and employees

Screencastify walkthru link: https://watch.screencastify.com/v/Z31QusOKA4Siq2ZLkrHa
GitHub Repository link: https://github.com/bradkuhne/BK-employee-tracker

## Description
  
 The BK Employee Tracker application allows a user to maintain employee, department and role tables via the command prompt. To initialize this application files can be seeded by running db.sql, schema.sql and seeds.sql in sequential order.  To start the application enter npm start from the command prompt.  There is no front end to this application.

   
## License
  
 [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  
 The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It combines a copyright waiver patterned after the very successful public domain SQLite project with the no-warranty statement from the widely-used MIT/X11 license.
  
## Table of Contents
  
* [Installation](#Installation)
  
* [Usage](#Usage)
  
* [Contributions](#Contributions)
  
* [Tests](#Tests)
  
* [Questions](#Questions)
  
## Installation
  
 To install the BK Employee Tracker you need to have Inquirer, Console.table and mysql2 installed.  After that, just start the application from the command prompt using NPM Start.  To initialize this application files can be seeded by running db.sql, schema.sql and seeds.sql in sequential order.  To start the application enter npm start from the command prompt.  There is no front end to this application.
  
## Usage
  
 The BK Employee tracker could be used by anyone who wants to manipulate simple joined tables.
  
## Contributions
  
 This project was solely developed by Brad Kuhne.
  
## Test Instructions
  
 This project was not developed with Express.  To test it, run index.js and compare results to expected results.
  
## Questions
  
 https://github.com/bradkuhne  Email: bjkuhne@aol.com


User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee???s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role an

The employeemgr schema contains the following three tables:

department

id: INT PRIMARY KEY

name: VARCHAR(30) to hold department name

role

id: INT PRIMARY KEY

title: VARCHAR(30) to hold role title

salary: DECIMAL to hold role salary

department_id: INT to hold reference to department role belongs to

employee

id: INT PRIMARY KEY

first_name: VARCHAR(30) to hold employee first name

last_name: VARCHAR(30) to hold employee last name

role_id: INT to hold reference to employee role

manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)


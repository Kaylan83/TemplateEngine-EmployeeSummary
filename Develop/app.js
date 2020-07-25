const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Question = require("./lib/Question");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Questions = require("./lib/Question");

// new created employees array
const employees = [];

// creating a manager function
 manager = ()=> {

   inquirer.prompt(Question.managerQuestions) 
   .then((response) => {  
    employees.push(new Manager(response.name, response.id, response.email, response.officeNumber));
    newEmployee();
    });
}

// creating engineer function
newEngr = ()=> {

        inquirer.prompt(Question.EngrQuestions)
        .then(response => { employees.push(new Engineer(response.name, response.id, response.email, response.github));
        newEmployee();
        });
}

//creating intern function
newIntern = () => {
    inquirer.prompt(Questions.InternQuestion)
    .then(response => {employees.push(new Intern(response.name, response.id, response.email, response.school));
    newEmployee();
    });
}

// creating the employee function and push the employee to the employees array 
// then append it to the html file 
 newEmployee = () => {
     console.log("--------------- ")
     inquirer.prompt(Questions.addMoreEmployees).then( response => {
         if (response.role ==="Engineer"){
             newEngr();
         } else if (response.role ==="Intern"){
             newIntern();
         } else {
             checkIfDirectoryExist(OUTPUT_DIR);
             fs.writeFileSync(outputPath,render(employees), err => {
                 if (err) throw err;
             });
         }
     });
 };

manager();

// check if the outboot directory is available, if not created it
checkIfDirectoryExist = (folder) => {
    try { fs.statSync(folder)} catch (error) { fs.mkdirSync(folder)}
}
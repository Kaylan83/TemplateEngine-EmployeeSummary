

const Questions = { 
    
    managerQuestions: [ 
    {
        
    type: "input",
    name: "name",
    message: "Please enter manager's name: "

    },

    {
        type: "input",
        name: "id",
        message: "Pleas enter manager's id: "
    
    },

    {
        type: "input",
        name: "email",
        message: "PLease enter manager's Email: "
    
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager's office number: "
  
    }

],

 EngrQuestions: [ 
    {
    type: "input",
    name: "name",
    message: "Please enter engineer's name: "
    
    },

    {
        type: "input",
        name: "id",
        message: "Pleas enter engineer's id: "
        
    },

    {
        type: "input",
        name: "email",
        message: "PLease enter engineer's Email: "
        
    },

    {
        type: "input",
        name: "github",
        message: "Please enter engineer's github username: "
        
    }

],

 InternQuestion: [
    {
        type: "input",
        name: "name",
        message: "Please enter Intern's name: "
        
        },
    
        {
            type: "input",
            name: "id",
            message: "Pleas enter Intern's id: "
            
        },
    
        {
            type: "input",
            name: "email",
            message: "PLease enter Intern's Email: "
            
        },
    
        {
            type: "input",
            name: "github",
            message: "Please enter Intern's school name: "
            
        }
],

addMoreEmployees: [
    {
        type: "list",
        name: "role",
        message: "add more employees?",
        choices: [
            "Engineer",
            "Intern",
            "Don't add more employees"
        ]
    }
]
};

module.exports = Questions;
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // console.log('answers :>> ', answers);
        const markdown = generateMarkdown(answers);
        console.log('markdown :>> ', markdown);
    })
}

// function call to initialize program
init();

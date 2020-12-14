const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the description of your project?'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'How is this project installed?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How should this project be used?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which license applies to this project?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT', "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'How can other developers contribute to this project?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'How can others test this project?'
    },
    {
        name: 'username',
        type: 'input',
        message: 'What is your Github username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
];

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);

            writeToFile('generated_README.md', markdown);
        })
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) return console.log(err);
        console.log('File written successfully!');
    })
}

// function call to initialize program
init();

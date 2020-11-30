// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

-----

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

------

## Installation

${data.installation}

------

## Usage

------

## License

------

## Contributing

------

## Tests

------

## Questions

`;
}

module.exports = generateMarkdown;

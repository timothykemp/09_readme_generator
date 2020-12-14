// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge;
  switch (data.license) {

    case "Apache License 2.0":
      licenseBadge =
        "";
      break;

    case "GNU General Public License v3.0":
      licenseBadge =
        "";
      break;

    case "MIT":
      licenseBadge =
        "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;

    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "";
      break;

    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "";
      break;

    case "Boost Software License 1.0":
      licenseBadge =
        "";
      break;

    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "";
      break;

    case "Eclipse Public License 2.0":
      licenseBadge =
        "";
      break;

    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "";
      break;

    case "GNU General Public License v2.0":
      licenseBadge =
        "";
      break;

    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "";
      break;

    case "Mozilla Public License 2.0":
      licenseBadge =
        "";
      break;

    case "The Unlicense":
      licenseBadge =
        "";
      break;

    default:
      licenseBadge = "";
      break;
  }

  return `# ${data.title}

-----

  ${licenseBadge}

-----

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

${data.usage}

------

## License

${data.license === "None"
      ? "This project does not have a license."
      : `This project is licensed under the terms of the ${data.license} license.`
    }

------

## Contributing

${data.contributing}

------

## Tests

${data.tests}

------

## Questions

  `;
}

module.exports = generateMarkdown;

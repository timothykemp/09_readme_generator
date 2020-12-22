// Function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge;

  // Use the licenseBadge info equal to the license selected by the user
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

  // Build README using the user's responses to the questions
  return `# ${data.title}

  ${licenseBadge}

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

-----

## Installation

${data.installation}

-----

## Usage

${data.usage}

-----

## License

${data.license === "None"
      ? "This project does not have a license."
      : `This project is licensed under the terms of the ${data.license} license. Please click the badge at the top of this README for more information regarding the details of the license.`
    }

-----

## Contributing

${data.contributing}

-----

## Tests

${data.tests}

-----

## Questions

If you have any questions about this project, please free to contact me through my [Github profile](https://github.com/${data.username}) or via [email](mailto:${data.email}).
  `;
}

// Export output for use in the index.js file
module.exports = generateMarkdown;

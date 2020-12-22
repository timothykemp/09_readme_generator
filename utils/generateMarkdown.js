// Function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge;

  // Use the licenseBadge info equal to the license selected by the user
  switch (data.license) {

    case "Apache License 2.0":
      licenseBadge =
        "[![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "GNU General Public License v3.0":
      licenseBadge =
        "[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)](https://opensource.org/licenses/GPL-3.0)";
      break;

    case "MIT License":
      licenseBadge =
        "[![MIT License](https://img.shields.io/badge/license-MIT%20License-green)](https://opensource.org/licenses/MIT)";
      break;

    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "[![BSD 2-Clause 'Simplified' License](https://img.shields.io/badge/license-BSD%202--Clause%20'Simplified'%20License-green)](https://opensource.org/licenses/BSD-2-Clause)";
      break;

    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "[![BSD 3-Clause 'New' or 'Revised' License](https://img.shields.io/badge/license-BSD%203--Clause%20'New'%20or%20'Revised'%20License-green)](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case "Boost Software License 1.0":
      licenseBadge =
        "[![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green)](https://opensource.org/licenses/BSL-1.0)";
      break;

    case "Creative Commons Zero v1.0 Universal License":
      licenseBadge =
        "[![Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0%20Universal%20License-green)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)";
      break;

    case "Eclipse Public License 2.0":
      licenseBadge =
        "[![Eclipse Public License 2.0](https://img.shields.io/badge/license-Eclipse%20Public%20License%202.0-green)](https://opensource.org/licenses/EPL-2.0)";
      break;

    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "[![GNU Affero General Public License v3.0](https://img.shields.io/badge/license-GNU%20Affero%20General%20Public%20License%20v3.0-green)](https://opensource.org/licenses/AGPL-3.0)";
      break;

    case "GNU General Public License v2.0":
      licenseBadge =
        "[![GNU General Public License v2.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v2.0-green)](https://opensource.org/licenses/GPL-2.0)";
      break;

    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "[![GNU Lesser General Public License v2.1](https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public%20License%20v2.1-green)](https://opensource.org/licenses/LGPL-2.1)";
      break;

    case "Mozilla Public License 2.0":
      licenseBadge =
        "[![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "The Unlicense":
      licenseBadge =
        "[![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-green)](https://opensource.org/licenses/unlicense";
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
      : `This project is licensed under the terms of the **${data.license}**. Please click the badge at the top of this README for specific details about the license.`
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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![badge](https://img.shields.io/badge/license-${license}-informational?style=for-the-badge)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `${renderLicenseBadge(license)}`;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}

## Description 
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests] (#tests)
* [License](#license)
* [Questions] (#questions)

## Installation
${data.Installation}

## Usage 
${data.Usage0}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## License
This project is under the ${data.License} license.
${renderLicenseBadge(data.License)}


## Questions
For questions, comments, and concerns, please reach out at ${data.Questions}
`;
}

module.exports = generateMarkdown;

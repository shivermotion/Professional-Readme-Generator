// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
	if (`${response.license}` === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

`;
}

module.exports = generateMarkdown;

function generateMarkdown(response) {
	return `
# ${response.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

## Username:
${response.username}
## Description :
${response.description}
## Installation :
${response.installation}
## Usage :
${response.usage}
## Licenses :
${response.license}
## Contribution:
${response.guidelines}
## Test:
${response.test}
## Email:
${response.email}
## Profile:
${response.profile}
`;
}

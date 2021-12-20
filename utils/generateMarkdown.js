// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === "MIT") {
		return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === "Apache 2.0") {
		return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === "") {
		return;
	}
}

// // TODO: Create a function to generate markdown for README
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

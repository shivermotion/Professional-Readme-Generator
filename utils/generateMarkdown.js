// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
	console.log(response);
	if (response.license === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	} else if (response.license === "Apache 2.0") {
		return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
	} else if (response.license === "GNU") {
		return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
	} else if (response.license === "none") {
		return "";
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
	if (response.license === "MIT") {
		return "https://opensource.org/licenses/MIT";
	} else if (response.license === "Apache 2.0") {
		return "https://opensource.org/licenses/Apache-2.0";
	} else if (response.license === "GNU") {
		return "https://www.gnu.org/licenses/gpl-3.0";
	} else if (response.license === "none") {
		return "";
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
	if (response.license === "MIT" || "GNU" || "Apache 2.0") {
		return `
## Licenses:
${renderLicenseBadge(response)}
${renderLicenseLink(response)}
`;
	} else {
		return "";
	}
}

module.exports = generateMarkdown;

// TODO: Create a function to generate markdown for README

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
## Description:
${response.description}
## Installation:
${response.installation}
## Usage:
${response.usage}
${renderLicenseSection(response)}
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

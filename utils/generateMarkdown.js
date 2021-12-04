// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
// 	return `# ${data.title}

// `;
// }

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
      
      ${response.username}
      ##username:
      
          ${response.description}
      ##description:
      
          ${response.installation}
      ##installation:
      
          ${response.usage}
      ##usage:
      
          ${response.license}
      ##licenses:
      
          ${response.guidelines}
      ##contribution:
      
          ${response.test}
      ##test:
      
          ${response.email}
      ##email:
      
          ${response.profile}
      ##profile:
      `;
}

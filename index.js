const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
	{
		type: "input",
		name: "title",
		message: "What is this project called?",
	},

	{
		type: "input",
		name: "descript",
		message: "Describe your project",
	},

	{
		type: "input",
		name: "Table of Contents",
		message: "What is this project called?",
	},
])
	.then((answers) => {
		fs.writeFile("README.md", generateMarkdown(), error);
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});

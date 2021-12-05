const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const { error } = require("console");

//generate questions in command line

inquirer.prompt([
	{
		type: "input",
		name: "title",
		message: "What is this project called?",
	},
	{
		type: "input",
		name: "username",
		message: "What is your username?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email?",
	},

	{
		type: "input",
		name: "description",
		message: "Describe your project",
	},

	{
		type: "input",
		name: "table",
		message: "Insert table of contents for your projects",
	},

	{
		type: "input",
		name: "installation",
		message: "Enter installation instructions for your project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information for your project",
	},

	{
		type: "input",
		name: "guidelines",
		message: "Enter contribution guideline information for your project",
	},
	{
		type: "input",
		name: "test",
		message: "Enter test instructions for your project",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license to use",
		choices: ["Apache 2.0", "GNU", "MIT", "none"],
	},
])
	.then((response) =>
		fs.writeFile("README.md", generateMarkDown(response), error)
	)

	.then(() => console.log("Successfully wrote to README.md"))
	.catch((error) => console.error(error));

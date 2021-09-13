const inquirer = require("inquirer");
const gM = require("./utils/generateMarkdown");
const fs = require("fs");

const Qs = [
  {
    type: "input",
    name: "Title",
    message: "TITLE: What is the title of your project?: ",
  },
  {
    type: "input",
    name: "Description",
    message: "DESCRIPTION: Describe your project: ",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "INSTALLATION GUIDE: What installation instructions would you like to include? Are there any dependencies to install?: ",
  },
  {
    type: "input",
    name: "Usage0",
    message: "USAGE: How does your application work?: ",
  },

  {
    type: "list",
    name: "License",
    message: "LICENSE: Which open source license would you like to use?: ",
    choices: ["Community", "MIT License", "GNU GPLv3", "Another license"],
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "CONTRIBUTING GUIDE: Would you like others to contribute to this repo? If so, give them some instruction and/or best practices: ",
  },
  {
    type: "input",
    name: "Tests",
    message: "TESTS: Do you have tests? Describe how to run them: ",
  },
  {
    type: "input",
    name: "Questions",
    message:
      "QUESTIONS: Please enter the email address at which users can contact you: ",
  },
];

function init() {
  console.log("init");
  inquirer.prompt(Qs).then((answers) => {
    let fileName = answers.Title.split(" ").join("_") + "README.md";
    console.log(fileName);
    let generatedText = gM(answers);
    fs.writeFile(`./generatedREADMEs/${fileName}`, generatedText, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully.");
      }
    });
  });
}

init();

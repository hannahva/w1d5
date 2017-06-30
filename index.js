var chalk = require("chalk");

var message = chalk.blue.bold.underline.inverse("Hello ") + chalk.green.bgMagentaBright("World");
console.log(message);
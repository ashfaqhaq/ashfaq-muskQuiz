var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log("Welcome to  quiz of Elon Musk ");
console.log(chalk.redBright("This is the test how much you know about Elon Musk. "));

console.log(chalk.keyword("orange")("Enter your Name!"));
var playerName = readlineSync.question(playerName);
console.log(chalk.cyan("Welcome " + playerName + " Let's Begin!"));


function questionBank(question, answer) {
  console.log(chalk.redBright("Please Type answer in this format: Jon Snow (Words first letter in Capital)"));
  console.log(chalk.keyword('orange')(question));
  var playerAnswer = readlineSync.question(playerAnswer);
  console.log("Your Answer: " + playerAnswer);

  if (playerAnswer === answer) {
    console.log(chalk.green("Correct Answer!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong Answer!"));
    score = score - 1;
  }

  console.log("-------------");
  console.log("Current Score:" + score);
}




questionBank("1.Elon Musk was born and raised in which country?", "South Africa");

questionBank("2. Tesla was founded in 2003. What was its first electric car called?", "Roadster");

questionBank("3.Which German automaker acquired a 10 percent stake in Tesla in 2010", "Daimler");

questionBank("4.Tesla’s initial public offering in June 2010 raised $226 million for the company. What was the opening share price?", "17");

if (score === 4) {
  console.log("Your Final Score:", score);
  console.log("Congratulations," + playerName + " you really follow Elon Musk");
} else {
  console.log("Your Final Score:", score);
}

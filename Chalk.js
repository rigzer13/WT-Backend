import chalk from "chalk"                                                                                                                                                                                   
console.log(chalk.green("Success!"));
console.log(chalk.red("Error: something went wrong"));
console.log(chalk.yellow("Warning: Check your input"));
console.log(chalk.bold("info :server is running...")) ;

//can combine styles
console.log(chalk.bgMagenta.white.bold("Important Message"));

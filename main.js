import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "enter your last number",
    },
    {
        type: "list",
        name: "opreator",
        message: "enter your opreator you want to perform ",
        choices: ["add", "substract", "multiply", "divide"]
    },
]), result;
switch (answer.opreator) {
    case "add":
        result = answer.num1 + answer.num2;
        console.log(result);
        break;
    case "substract":
        result = answer.num1 - answer.num2;
        console.log(result);
        break;
    case "multiply":
        result = answer.num1 * answer.num2;
        console.log(result);
        break;
    case "divide":
        result = answer.num1 / answer.num2;
        console.log(result);
        break;
}

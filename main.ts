import inquirer from "inquirer";
let user = await inquirer.prompt({
  name: "age",
  type: "number",
  message: "Enter your age"
})
console.log(user);
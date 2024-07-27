// import inquirer from "inquirer";
// let day1 = await inquirer.prompt({
//   name: "day",
//   type: "number",
//   message: "Enter your day"
// })
// console.log(day1);
// let day = "Sunday"
// switch(day){
//   case "Sunday":
//   console.log("Go Hiking Its Sunday");
//   break;
//   case "Friday":
//   console.log("Do Pray Its Friday");
//   break;
//   case "Monday":
//   console.log("Its Office Day Upps!!");
//   break;
//   default:
//     console.log("Enter valid day");
// }
// import inquirer from "inquirer";
// const input1 = await inquirer.prompt({
//   name:"number1",
//   type:"number",
//   message:"Enter your first number here :"
// })
// const input2 = await inquirer.prompt({
//   name:"number2",
//   type:"number",
//   message:"Enter your first number here :"
// })
// let add :number = input1.number1 + input2.number2 ; //5
// let sub :number = input1.number1 - input2.number2 ; //1
// let mult :number = input1.number1 * input2.number2 ; //6
// let divide :number = input1.number1 / input2.number2 ; //1.5
// console.log(`Addition's result is ${add} Subtraction result is ${sub} Multiplication result is :${mult} and 
//   division result is ${divide}`);
// console.log(add+sub*mult-divide);    
// function halfFryEgg (){
//   let cooked = 2*2;
//   return(cooked);
// }
// console.log(halfFryEgg());
// import inquirer from "inquirer";
// let input1 = await inquirer.prompt([{
//    name:"userAnswer",
//    type:"string",
//    message:"What is the capital of France ?"
// }]);
// function quiz (question:string , correctAnswer:string){
//   if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
//     console.log("Correct !");
// }
// else{
//   console.log("Wrong answer . Try again");
// }
// }
// quiz("What is the capital of France ?" , "France");
// --------------------------------------------------
// function calcProduct (a:number,b:number) {
//   console.log(a*b);
// }
// calcProduct(10,5);
// ------------------------------------------------------------
// function greet (name:string , greeing:string="Hello"){
//    console.log(greeing + ' '+ name);
// }
// greet("maadeha");
let person = {
    name: "maadeha",
    age: 10
};
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}
export {};

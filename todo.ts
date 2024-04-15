#! /usr/bin/env node

import inquirer from "inquirer"
let todos = []//Shopper []
let condition = true; 

while(condition)
    {
let todoQuestions= await inquirer.prompt(
    [
    {
name:"firstQuestion",
type:"input",
message:"What would you like to add in your Todo?"
},
{

   name:'secondQuestion',
   type:"confirm",
   message:'Wold you like to add more in your Todo?',
   default:true 
}
]
);
todos.push(todoQuestions.firstQuestion);
condition = todoQuestions.secondQuestion;
console.log(todos)
}
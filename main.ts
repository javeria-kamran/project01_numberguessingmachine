import inquirer from "inquirer"


const randomnumbers = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber" ,
        type: "number" ,
        message: "Please guess a number between 1-6"
    },
]);

if (answers.userguessednumber === randomnumbers) {
    console.log("Congratulations! you guessed right number")
} else {
    console.log("Oops! you guessed a wrong number")
}
console.log(randomnumbers); 









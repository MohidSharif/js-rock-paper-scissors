
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)

    if (choice == 1){
        return "rock";
    }
    else if (choice == 2){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors: ");
    return choice;
}

let human_choice = getHumanChoice();
let computer_choice = getComputerChoice();

console.log("You chose " + human_choice + " and computer chose " + computer_choice);

if ((human_choice == "rock") && (computer_choice == "paper")){
    console.log("You lost!")
}
else if ((human_choice == "rock") && (computer_choice == "scissors")){
    console.log("You won!")
}
else if ((human_choice == "paper") && (computer_choice == "scissors")){
    console.log("You lost!")
}
else if ((human_choice == "paper") && (computer_choice == "rock")){
    console.log("You won!")
}
else if ((human_choice == "scissors") && (computer_choice == "rock")){
    console.log("You lost!")
}
else if ((human_choice == "scissors") && (computer_choice == "paper")){
    console.log("You won!")
}
else {
    console.log("Its a tie!")
}

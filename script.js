let human_score = 0;
let computer_score = 0;

for (let i = 0; i < 5; i++){
    let human_choice = getHumanChoice();
    let computer_choice = getComputerChoice();
    play_game(human_choice, computer_choice);
    console.log("Your score: " + human_score + " Computer score: " + computer_score);
}

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

function play_game (human_choice, computer_choice){

    console.log("You chose " + human_choice + " and computer chose " + computer_choice);

    if ((human_choice == "rock") && (computer_choice == "paper")){
        console.log("You lost!")
        add_score("computer")
    }
    else if ((human_choice == "rock") && (computer_choice == "scissors")){
        console.log("You won!")
        add_score("human")
    }
    else if ((human_choice == "paper") && (computer_choice == "scissors")){
        console.log("You lost!")
        add_score("computer")
    }
    else if ((human_choice == "paper") && (computer_choice == "rock")){
        console.log("You won!")
        add_score("human")
    }
    else if ((human_choice == "scissors") && (computer_choice == "rock")){
        console.log("You lost!")
        add_score("computer")
    }
    else if ((human_choice == "scissors") && (computer_choice == "paper")){
        console.log("You won!")
        add_score("human")
    }
    else {
        console.log("Its a tie!")
    }
}

function add_score (winner){
    if (winner == "human"){
        human_score += 1;
    }
    else{
        computer_score += 1;
    }
}





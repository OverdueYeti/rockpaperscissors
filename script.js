function getComputerChoice (){
    let max = 3;
    let x = 0;
    // multiply 0-1 given from Math.random by 3 then use floor to convert to an int. +1 to give a 1,2 or 3
    x = (Math.floor(Math.random() * max) + 1);

    // return the computers rsp answer
    switch(x) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
    
}

function getHumanChoice(){
    let rsp = "";
    rsp = prompt("Choose rock paper or scissors");

    rsp = rsp.toLowerCase();

    if (rsp === "rock" || rsp === "paper" || rsp === "scissors"){
        return rsp;
    }else{
        console.log(rsp + " is not a valid message");
    }
}

function playRound(human, computer){
    if (human == "rock" && computer == "scissors"){
        return "Win";
    }else if (human == "scissors" && computer == "paper"){
        return "Win";
    }else if (human == "paper" && computer == "rock"){
        return "Win";
    }else if (human == computer){
        return "Tie";
    }else{
        return "Lose";
    } 
}

let rspComputer = ""; // computers rsp pick
let rspHuman = "";
let computerScore = 0;
let humanScore = 0;
let result = "";


for (let i = 0; i < 5; i++){
    rspHuman = getHumanChoice();
    rspComputer = getComputerChoice();
    console.log(rspComputer);
    console.log(rspHuman);

    result = playRound(rspHuman, rspComputer);
    console.log(result);

    switch(result) {
        case "Win":
            humanScore++;
            break;
        case "Lose":
            computerScore++;
            break;
        case "Tie":
            break;
    }
}



console.log("Your score " + humanScore + " Computer score " + computerScore);
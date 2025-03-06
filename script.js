function getComputerChoice (){
    let max = 3;
    let x = 0;
    // multiply 0-1 given from Math.random by 3 then use floor to convert to an int. +1 to give a 1,2 or 3
    x = (Math.floor(Math.random() * max) + 1);

    // return the computers rsp answer
    switch(x) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
    
}

let rsp = ""; // computers rsp pick
rsp = getComputerChoice();
console.log(rsp);
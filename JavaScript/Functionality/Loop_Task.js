
let Guess_Number =Number( (Math.floor(Math.random()*10)+1)) ;
console.log(Guess_Number);

let User_input = Number(prompt("Enter number to guess "));

while(true){
    if(User_input === Guess_Number){
        console.log(`You guessed it ${Guess_Number}`);
        
    }else if(User_input!==Guess_Number){
        console.log(`Try again ${Guess_Number} `);
        User_input = Number(prompt("Enter number to guess "));
    }else{
        console.log("Invalid input");
    }
}

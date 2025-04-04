
// let Guess_Number =Number( Math.floor(Math.random()*10)) ;
// console.log(Guess_Number);

// let User_input = Number(prompt("Enter number to guess "));



// while(User_input){

//     if(User_input === Guess_Number){
//         console.log(`You guessed it ${Guess_Number}`);
//          break;
//     }else if(User_input!==Guess_Number){
//          for(let i=0; i<=3; i++){
//             User_input = Number(prompt("Try again"));
//             if(User_input === Guess_Number){
//                 console.log(`You guessed it ${Guess_Number}`);
//                 break;
//             }else if(i===3){
//                 console.log('Game Over');
//             }
//         }
//     }else{
//         console.log("Invalid input");
//     }

//     i++;
// }

// ==========> above simple logic for  Guess Number Game with out ui  <======= //






// =======> Guess Number Game with beautiful ui  <======= //


let Guess_Number = Math.floor(Math.random() * 10);
console.log(Guess_Number);

let attempts = 1;

document.getElementById("submitGuess").addEventListener("click", function() {
    let User_input = Number(document.getElementById("guessInput").value);

    if (User_input) {
        if (User_input === Guess_Number) {
            document.getElementById("message").textContent = `You guessed it! The number was ${Guess_Number}.`;
            document.getElementById("message").classList.add("text-green-500");
            document.getElementById("message").classList.remove("text-gray-600");
            document.getElementById("guessInput").disabled = true;
        } else {
            attempts++;
            if (attempts < 6) {
                document.getElementById("attempts-left").textContent = (6 - attempts);
                document.getElementById("retry-container").classList.remove("hidden");
                document.getElementById("message").textContent = `Wrong guess! Try again.`;
                document.getElementById("message").classList.add("text-red-500");
            } else {
                document.getElementById("message").textContent = "Game Over. The number was " + Guess_Number;
                document.getElementById("message").classList.add("text-red-500");
                document.getElementById("submitGuess").disabled = true;

            }
        }
    } else {
        document.getElementById("message").textContent = "Invalid input! Please enter a number.";
        document.getElementById("message").classList.add("text-red-500");
    }
});

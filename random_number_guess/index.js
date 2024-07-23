// Number guessing gridTemplateAreas: 

const min = 1;
const max = 10;

const ans = Math.floor(Math.random() * (max - min + 1));

console.log(ans);
let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} - ${max}`); 
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert("Please mind the range");
    }
    else{
        attempts ++ ;
        if(guess < ans){
            window.alert("Less than the answer");
        }
        else if(guess > ans){
            window.alert("Greater than the ans");
        }
        else{
            window.alert(`Correct !! The ans was ${ans}, It took you ${attempts} attempts`);
        }
    }

    running = false;
}
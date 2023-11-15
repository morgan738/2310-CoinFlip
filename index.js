let flip = Math.round(Math.random());
let guess = window.prompt("Enter a value of 0 or 1");
guess = guess * 1;

if(guess !== 0 && guess !== 1){
    console.log(`Your guess was ${guess}. This is invalid. Please enter 0 or 1.`)
}else if(flip === guess) {
    console.log(`You won! Your guess was ${guess}. The flip was ${flip}`)
}else{
    console.log(`You lost! Your guess was ${guess}. The flip was ${flip}`)
}

flip = Math.round(Math.random());
guess = window.prompt("Enter a value of 0 or 1");
guess = guess * 1;

if(guess !== 0 && guess !== 1){
    console.log(`Your guess was ${guess}. This is invalid.`)
}else if(flip === guess) {
    console.log(`You won! Your guess was ${guess}. The flip was ${flip}`)
}else{
    console.log(`You lost! Your guess was ${guess}. The flip was ${flip}`)
}

flip = Math.round(Math.random());
guess = window.prompt("Enter a value of 0 or 1");
guess = guess * 1;

if(guess !== 0 && guess !== 1){
    console.log(`Your guess was ${guess}. This is invalid.`)
}else if(flip === guess) {
    console.log(`You won! Your guess was ${guess}. The flip was ${flip}`)
}else{
    console.log(`You lost! Your guess was ${guess}. The flip was ${flip}`)
}


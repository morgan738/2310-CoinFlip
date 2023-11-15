function getFlip(){
    let random = Math.random()
    random = Math.round(random)
    return random
}

function getGuess(){
    let guess = window.prompt("Enter a 0 or 1")
    guess = guess * 1
    return guess
}

function displayResult(randFlip, userGuess){
    console.log(randFlip)
    console.log(userGuess)
    if(userGuess !== 0 && userGuess !== 1){
        console.log(`Your guess was ${userGuess}. This is invalid. Please enter 0 or 1. Or this wont work`)
    }else if(randFlip === userGuess) {
        console.log(`You won! Your guess was ${userGuess}. The flip was ${randFlip}`)
    }else{
        console.log(`You lost! Your guess was ${userGuess}. The flip was ${randFlip}`)
    }
}

let flip = getFlip()
let guess = getGuess()
displayResult(flip, guess)

// flip = getFlip()
// guess = getGuess()
// displayResult(flip, guess)

// flip = getFlip()
// guess = getGuess()
// displayResult(flip, guess)


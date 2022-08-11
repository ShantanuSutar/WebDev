let maximum = parseInt(prompt("Enter the maximum number: "));

if (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess: "))
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q')
        break;
    if (guess < targetNum)
        guess = prompt("Too Low!")

    else
        guess = prompt("Too High!")
    attempts++;
}

if (guess === 'q')
    console.log("OK, YOU QUIT!")
else {
    console.log("CONGRATULATIONS! YOU WON")
    console.log(`YOU GOT IT in ${attempts} attempts!`)
}
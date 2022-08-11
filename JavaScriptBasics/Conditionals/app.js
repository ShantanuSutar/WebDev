
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5")
    console.log(random);
}

const day = prompt("Enter a day").toLowerCase();

if (day === "monday") {
    console.log("Its a monday");
} else if (day === "tuesday") {
    console.log("its a tuesday!")
} else {
    console.log("its normal day")
}
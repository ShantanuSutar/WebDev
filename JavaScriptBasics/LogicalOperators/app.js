const password = prompt("Enter password:");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password!")
} else {
    console.log("InValid Password!")
}
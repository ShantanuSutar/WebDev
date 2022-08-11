const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
}
function scream() {
    console.log("Ahhhhhh")
    console.log("Stop touching me")
}
btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');

// btn3.addEventListener('dblclick', function() {
//     alert("CLICKED!");
// })

btn3.addEventListener('dblclick', scream);
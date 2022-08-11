// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";


// // const newImg = document.createElement('img');
// // newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// // container.appendChild(newImg);


// for (let i = 1; i < 10; i++) {
//     const newImg = document.createElement('img');
//     newImg.src = ` ${baseurl} ${i}.png `
//     container.appendChild(newImg)
// }


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}

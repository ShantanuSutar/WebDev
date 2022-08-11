// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const query = document.querySelector('a[title="Java"]')

// const links = document.querySelectorAll('p a')

// // for (let link of links) {
// //     console.log(link.href)
// // }

// const temp = document.querySelectorAll('.square')


const allLinks = document.querySelectorAll('a')

// for (let link of allLinks) {
//     link.innerText = "I AM A LINK!"
// }

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'yellow';
    link.style.textDecorationStyle = 'wavy';
}

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
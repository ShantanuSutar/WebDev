const fs = require('fs');
// console.log(fs)

const folderName = process.argv[2] || 'Project'

//Asynchronous version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!")
//     if (err) throw err;
// });
// console.log("I COME AFTER MKDIR IN THE FILE!!!");


//Synchronous version
// fs.mkdirSync('Cats')
// console.log("I COME AFTER MKDIR IN THE FILE!!!");  


fs.mkdirSync(folderName);
fs.mkdirSync(`${folderName}/index.html`);
fs.mkdirSync(`${folderName}/app.js`);
fs.mkdirSync(`${folderName}/style.css`);

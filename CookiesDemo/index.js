const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("HEY THERE!")
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks')
    res.send('OK SENT YOU A COOKIE!!!')
})

app.listen(3000, () => {
    console.log("SERVING!")
})
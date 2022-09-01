const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connection open")
    })
    .catch(err => {
        console.log("OH NO mongo connecion ERROR")
        console.log(err)
    })


app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    res.redirect('/');
})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN!')
})

app.listen(3000, () => {
    console.log('SERVING YOUR APP!')
})
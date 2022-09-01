const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const session = require('express-session')

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
app.use(session({ secret: 'notagoodsecret' }))

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
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        req.session.user_id = user._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login')
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    res.render('secret')
})

app.listen(3000, () => {
    console.log('SERVING YOUR APP!')
})
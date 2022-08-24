const { query } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { nextTick } = require('process');

app.use(morgan('tiny'))


app.use((req, res, next) => {
    req.requuestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
})

app.get('/secret', (req, res) => {
    res.send('MY SECRET IS : I AM TRUTH')
})

app.use((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!')
})

// morgan('tiny')


// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE")
//     next();
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE after calling next()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE")
//     next();
// })


app.get('/', (req, res) => {
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
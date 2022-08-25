const { query } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { nextTick } = require('process');

app.use(morgan('tiny'))



app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
})


const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    // res.send('SORRY YOU NEED A PASSWORD!!!')
    throw new Error('Password Required!')
})

app.get('/', (req, res) => {
    console.log(` REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(` REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF')
})


app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS : I AM TRUTH')
})

app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.use((err, req, res, next) => {
    console.log("****************************")
    console.log("************ERROR***********")
    console.log("****************************")
    console.log(err)
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





app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
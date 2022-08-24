const express = require('express');
const app = express();
const morgan = require('morgan');
const { nextTick } = require('process');

// morgan('tiny')

app.use(morgan('common'))
app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE")
    next();
    return next();
    console.log("THIS IS MY FIRST MIDDLEWARE after calling next()")
})
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE")
    next();
})


app.get('/', (req, res) => {
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
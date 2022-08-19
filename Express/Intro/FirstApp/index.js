const express = require("express")
const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     res.send("<h1>This is my webpage!</h1>")
// })
app.get('/', (req, res) => {
    // console.log("CAT REQUEST")
    res.send("This is the home page!!!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>This is a ${subreddit} subreddit! </h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit!</h1>`)
})


app.get('/cats', (req, res) => {
    // console.log("CAT REQUEST")
    res.send("MEOW!!")
})

app.get('/dogs', (req, res) => {
    // console.log("CAT REQUEST")
    res.send("WOOF!!")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!")
    }
    res.send(`<h1>Search results for: ${q} </h1>`)

})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 3000!")
})


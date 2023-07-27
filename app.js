const express = require("express")
const app = express()
const path = require('path');
const PORT = 3030

//agregado static
app.use(express.static('public'));

//agregado el home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

//agregado register.html
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"))
})
//agregado login.html
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

//agregado 404
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"))
})
//levantando el server

app.listen(PORT, ()=> {
    console.log(`TUKI TU SERVER EN http://localhost:${PORT}`)
})
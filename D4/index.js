import c from "cors";
import express from "express";
const app = express()
app.use(c())
import persona from "./personas.js"
console.log(persona)

app.get("/personas", (req, res) =>{
    res.send(persona)
})

app.listen(3001)

import c from "cors";
import express from "express";
const app = express()
app.use(c())
//Ejercicio 1
// app.get("/", (request, response) => {
//     response.send("<h1> Hola mundo </h1>")
// })

//Ejercicio 2
// function numeroAleatorio(maxNum){
//     return parseInt(Math.random()* maxNum + 1)
// }
// app.get("/:maxNum", (request, response) =>{
//     let maxNum = request.params.maxNum
//     response.send(numeroAleatorio(maxNum))
// })

//Ejercicio 3
// const personas = ["Jorge", "Marta", "Luis", "Ana", "Pablo"];

// app.get("/persona", (req, res) => {
//   res.json(personas);
// });

// app.get("/persona/:parametro", (req, res) => {
//   const persona = personas.find((p) => p === req.params.parametro);
//   res.json(persona);
// });

//Ejercicio 4
import saludarEnExpress from "./saludo.js"
app.get("./saludo", (req,res)=>{
    res.send(saludarEnExpress())
})




app.listen(3000)
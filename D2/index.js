
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
// import saludarEnExpress from "./saludo.js"
// app.get("/saludo", (req,res)=>{
//     res.send(saludarEnExpress())
// })

//Ejercicio 5
// const persona = {
//   nombre: "Jorge",
//   apellido: "Ruttencutter",
//   edad: 28,
// };

// app.get("/nombre/:nombre", (req, res) => {
//   persona.nombre = req.params.nombre;
//   res.json(persona);
// });
// app.get("/apellido/:apellido", (req, res) => {
//   persona.apellido = req.params.apellido;
//   res.json(persona);
// });
// app.get("/edad/:edad", (req, res) => {
//   persona.edad = req.params.edad;
//   res.json(persona);
// });

// app.get("/persona", (req, res) => {
//   res.json(persona);
// });
//Ejercicio 6
// const clase = [
//   "marta",
//   "jorge",
// ];

// app.get("/class", (req, res) => {
//   res.json(clase);
// });

// app.get("/push/:teacher", (req, res) =>{
//     clase.push(req.params.teacher)
// })

//Ejercicio 7
// const contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// import random from "./funciones.js"

// app.get("/contar", (req, res) =>{
//     const indice = random();
//     contadores[indice]++
//     res.json(contadores)
// })

//Ejercicio 8
const contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
import random from "./funciones.js"

app.get("/contar", (req, res) =>{
    const indice = random();
    contadores[indice]++
    res.json(contadores)
})
app.get("/borrar/:numero", (req, res) => {
  const indice = Number(req.params.numero);
  contadores[indice] = 0;
  res.json(contadores);
});



app.listen(3001)
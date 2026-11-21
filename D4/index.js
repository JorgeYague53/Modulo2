import c from "cors";
import express from "express";
const app = express()
app.use(c())
import persona from "./personas.js"
console.log(persona)

app.get("/personas", (req, res) =>{
    res.json(persona)
})
app.post("/personas/:nombre/:apellido/:edad", (req, res) => {
    const { nombre, apellido, edad } = req.params;
    persona.push({ nombre, apellido, edad: Number(edad) });
    res.json(persona);
});
app.put("/personas/:nombre/:apellido/:edad", (req, res) => {
    const { nombre, apellido, edad } = req.params;
    persona.push({ nombre, apellido, edad: Number(edad) });
    res.json(persona);
});
app.delete("/personas/:nombre", (req, res) => {
    const { nombre } = req.params;
    persona = persona.filter(p => p.nombre !== nombre);
    res.json(persona);
});

app.listen(3001)
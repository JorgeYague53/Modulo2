const persona = [
     {
        nombre: "Jorge",
        apellido: "Yague",
        edad: 28,
    },
    {
        nombre: "Sarah",
        apellido: "Ruttencutter",
        edad: 26
    }

]
function showPersona() {
    `<div>
        <h1>${persona.nombre}</h1>
        <h2>${persona.apellido}</h2>
        <h3>${persona.edad}</h3>
    </div>`
    console.log(persona)
}
export { persona, showPersona }
export default persona
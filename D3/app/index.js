import { getAnimalByName } from "./database.js"
function send() {
    let name = document.getElementById("name-input").value

    const animal = getAnimalByName(name)
    if (animal) {
        console.log(animal)
    } else {
        console.log("Animal not found")
    }
    }

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    send()
})

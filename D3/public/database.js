const animales = [
    {
        name: "Mark",
        age: 10,
        animal: "Horse"
    },
    {
        name: "Luci",
        age: 8,
        animal: "Cat"
    },
    {
        name: "Pizza",
        age: 6,
        animal: "cat"
    }
]
export function getAnimalByName(name) {
    return animales.find(animal => animal.name === name)
}
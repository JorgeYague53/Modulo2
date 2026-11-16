//Ejercicio 1 y 2
let name = "Jorge"
console.log(`Hola ${name}`)
//Ejercicio 3
// const exactMath = require('exact-math')
// exactMath.add(5, 5); //10
// exactMath.sub('25.5','.5'); //25
// exactMath.mul(2, '2', 5, .1); //2
// exactMath.div('55', 2); //27,5
// exactMath.formula('4*(12/3)-7.77'); //8.23
// exactMath.round(123456, 5) //120000
// exactMath.ceil(0.123456789, -3) //0.124
// exactMath.floor(9.999, 1) //9
// exactMath.pow(2, 5); //32

// let a = exactMath.add(789, 34, 250443);
// let b = exactMath.sub(2059, 79);
// let c = exactMath.mul('3.24', '39.856');
// let d = exactMath.div(1205, '12.002');

// console.log(`
//     a) ${a}
//     b) ${b}
//     c) ${c}
//     d) ${d}`)

//Ejercicio 4
// import litNum from "./operaciones.js"
// let num1 = 12
// let num2 = 33
// console.log(litNum(num1,num2))

//Ejercicio 6
// import sentenceLeingth from "./funcion6.js"
// let texto = "Hola mundo"
// console.log(`La longitud de "${texto}" es ${sentenceLeingth(texto)}`)

//Ejercicio 7
// import readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";

// const rl = readline.createInterface({ input, output });

// // const valor = Number(await rl.question("Write a valeu: "));
// import numeroAleatorio from "./randomNum.js"
// let valor = numeroAleatorio()
// rl.close();
// import consecutiveValeus from "./funcion6.js"
// console.log(`Your valeu was ${valor} and I give you ${consecutiveValeus(valor)}`)

//Ejercicio 8
import datos from "./modulo.js";

console.log(datos.boolean);     
console.log(datos.object.c);     

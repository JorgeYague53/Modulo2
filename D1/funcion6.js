// function sentenceLeingth (texto){
//     return texto.length;
// }
// export default sentenceLeingth
export default function consecutiveValeus(valor) {
  const resultado = [];
  for (let n = valor; n <= (valor + 10); n++) {
    resultado.push(n);   // no return here
  }
  return resultado;      // return goes after the loop
}
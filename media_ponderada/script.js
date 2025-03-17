const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));
const pesos = [2, 3, 5];

console.log(dados);
console.log(pesos);

let sum = 0;
let media = 0;

for(let i=0; i<dados.length; i++){
    sum += dados[i] * pesos[i];
    media += pesos[i];

}
let mediaPonderada = sum/media;
console.log(mediaPonderada.toFixed(1));
const dados = document.getElementById("dados")
              .innerHTML.split("\n")
              .map(x => Number(x));

console.log(dados);

let dentro = 0;
let fora = 0;

dados.forEach(numbers => {
    if(numbers > 20 || numbers < 10){
        fora++;
    }else{
        dentro++;
    }
});

console.log(dentro, "Dentro")
console.log(fora, "Fora")
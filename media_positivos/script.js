const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

let sum = 0;
let i = 0;
let media = 0;
dados.forEach(number => {
    if(number >= 10 && number >= 0){
        sum += number;
        i++
    }
    media = sum/i;
});

console.log(media.toFixed(2));

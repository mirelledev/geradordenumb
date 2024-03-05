const myButton= document.getElementById("myButton");
const resultdado = document.getElementById ("resultdado");
let min ;
let max ;
let randomNumb1;
let randomNumb2;
let numb;
const frase = document.getElementById("frase") 
curi = document.getElementById("curi");

myButton.onclick = function (){
    randomNumb1 = document.getElementById("valor1").value;
    randomNumb1 = Number(randomNumb1);
    randomNumb2 = document.getElementById("valor2").value;
    randomNumb2 = Number(randomNumb2);

    let min = randomNumb1;
    let max = randomNumb2;

    numb = Math.trunc(Math.random() * (max - min + 1)) + min ;


    resultdado.textContent = numb

    if(numb % 2 == 0){
        curi.textContent = `Curiosidade: O número sorteado é PAR!`

    }

    else{
        curi.textContent = `Curiosidade: O número sorteado é IMPAR!`
    }



}



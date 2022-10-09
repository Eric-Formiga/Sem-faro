const img = document.getElementById("img");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");


function redOn(){
    img.src  = '../images/vermelho.png'
}

function yellowOn(){
    img.src  = '../images/amarelo.png'
}

function greenOn(){
    img.src  = '../images/verde.png'
}


red.addEventListener('click', redOn);
yellow.addEventListener('click', yellowOn);
green.addEventListener('click', greenOn);
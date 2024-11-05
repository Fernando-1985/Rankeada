const Vitorias = 99
const Derrotas = 13

function calcular(){
    return Vitorias - Derrotas
}

const nivel = calcular()

let Ranke 

if (nivel < 10){
Ranke = "ruinsão"
}
else if (nivel > 11 && nivel < 20){
    Ranke = "Bronze"
}
else if (nivel > 21 && nivel < 40){
    Ranke = "Prata"
}
else if (nivel > 41 && nivel < 60){
    Ranke = "Ouro"
}
else if (nivel > 61 && nivel < 80){
    Ranke = "Diamante"
}
else if (nivel > 81 && nivel < 100){
    Ranke = "Mistico"
}
else if (nivel > 101 && nivel < 120){
    Ranke = "Lendario"
}
else if (nivel > 121 && nivel < Infinity){
    Ranke = "Mestre"
}

console.log ("seu Heroí está com " + nivel + " Pontos e está no Ranke " + Ranke)
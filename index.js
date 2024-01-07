let NomeHeroi = [
    "Kauan o Progamador",
    "Soldador Do Norte",
    "Luter Vanter",
    "Pato o Destruidor"
]

let XPHeroi = [
    99999,
    7867,
    9275,
    25
]

console.log("=================== NIVEL DOS HEROIS ===================")

for (let i = 0 ; i < NomeHeroi.length ; i++) {
    if (XPHeroi[i] <= 1000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Ferro")
    } 
    else if (XPHeroi[i] >= 1001 && XPHeroi[i] <= 2000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Bronze")
    }
    else if (XPHeroi[i] >= 2001 && XPHeroi[i] <= 5000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Prata")
    }
    else if (XPHeroi[i] >= 5001 && XPHeroi[i] <= 7000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Ouro")
    }
    else if (XPHeroi[i] >= 7001 && XPHeroi[i] <= 8000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Platina")
    }
    else if (XPHeroi[i] >= 8000 && XPHeroi[i] <= 9000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Ascendente")
    }
    else if (XPHeroi[i] >= 9001 && XPHeroi[i] <= 10000) {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Imortal")
    }
    else {
        console.log("O Herói de nome " + NomeHeroi[i] + " está no nível de Radiante")
    }
}
console.log("========================================================")


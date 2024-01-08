let resultado = partidasResultados(152, 97)
let rank 
function partidasResultados(vitorias = 0, derrotas = 0) {
    return vitorias - derrotas
}

if (resultado <= 10) {
    rank = "Ferro"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
} 
else if (resultado >= 11 && resultado <= 20) {
    rank = "Bronze"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
}
else if (resultado >= 21 && resultado <= 50) {
    rank = "Prata"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
}
else if (resultado >= 51 && resultado <= 80) {
    rank = "Ouro"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
}
else if (resultado >= 81 && resultado <= 90) {
    rank = "Diamante"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
}
else if (resultado >= 91 && resultado <= 100) {
    rank = "Lendário"
    console.log(`O Herói tem de saldo de ${resultado} está no nível ${rank}`)
}
else {
    rank = "Imortal"
    console.log(`O Herói tem de saldo de ${resultado} e está no nível ${rank}`)
}

class heroi {
    constructor(nome, idade, tipo , nivel) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.nivel = nivel
    }
    atacar() {
        let tipoAtaque

        if (this.tipo == "guerreiro") {
            tipoAtaque = "a Espada ⚔️ "
            console.log(`o ${this.tipo} ${this.nome} atacou usando ${tipoAtaque} causando ${15 * this.nivel} de dano`)
            console.log()
        } else if (this.tipo == "mago") {
            tipoAtaque = "Magia 🪄 "
            console.log(`o ${this.tipo} ${this.nome} atacou usando ${tipoAtaque} causando ${15 * this.nivel} de dano`)
            console.log()
        } else if (this.tipo == "monge") {
            tipoAtaque = "Artes Marciais 👊 "
            console.log(`o ${this.tipo} ${this.nome} atacou usando ${tipoAtaque} causando ${15 * this.nivel} de dano`)
            console.log()
        } else if (this.tipo == "ninja") {
            tipoAtaque = "Shurikens 🥷 "
            console.log(`o ${this.tipo} ${this.nome} atacou usando ${tipoAtaque} causando ${15 * this.nivel} de dano`)
            console.log()
        } else {
            tipoAtaque = "um ataque nunca antes visto"
            console.log(`o ${this.tipo} ${this.nome} atacou usando ${tipoAtaque} causando ${15 * this.nivel} de dano`)
            console.log()
        }
    }

    fichaHerois() {
        console.log("========== Ficha De Heroi ==========")
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Classe: ${this.tipo}`)
        console.log(`Level: ${this.nivel}`)
        console.log("====================================")
        console.log()
    }
}

let heroi1 = new heroi("Kauan", 20, "progamador", 99)
let heroi2 = new heroi("Vangard", 52, "guerreiro", 59)
let heroi3 = new heroi("Crominus", 387, "mago", 76)
let heroi4 = new heroi("Kwazaki", 19, "ninja", 12)
let heroi5 = new heroi("Tauros", 72, "monge", 51)

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()

heroi1.fichaHerois()
heroi2.fichaHerois()
heroi3.fichaHerois()
heroi4.fichaHerois()
heroi5.fichaHerois()
let vitorias = 100
let derrotas = 20

let saldoDeRankeadas = calculadora(vitorias, derrotas)
let nivelDoHeroi = obterNivel(saldoDeRankeadas)

// Função para calcular o saldo de ranqueadas
function calculadora(vitorias, derrotas) {
    return vitorias - derrotas
}

// Função para obter o nível com base no saldo de ranqueadas
function obterNivel(saldoDeVitorias) {
    switch (true) {
        case saldoDeVitorias < 10:
            return "Ferro"
            break
        case saldoDeVitorias >= 11 && saldoDeVitorias <= 20:
            return "Bronze"
            break
        case saldoDeVitorias >= 21 && saldoDeVitorias <= 50:
            return "Prata"
            break
        case saldoDeVitorias >= 51 && saldoDeVitorias <= 80:
            return "Ouro"
            break
        case saldoDeVitorias >= 81 && saldoDeVitorias <= 90:
            return "Diamante"
            break
        case saldoDeVitorias >= 91 && saldoDeVitorias <= 100:
            return "Lendário"
            break
        case saldoDeVitorias >= 101:
            return "Imortal"
            break
        default:
            return "Nível não definido"
    }
}


// Mensagem de Saída
console.log(`O Herói tem saldo de: ${saldoDeRankeadas} e está no nível: ${nivelDoHeroi}`)

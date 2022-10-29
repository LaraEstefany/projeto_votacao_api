// API FATOS CACHORROS
// https://dog-api.kinduff.com/api/facts (NÃO TEM COMO ESPECIFICAR TAMAMHO)

votar()

var votoGato = 0
var votoCachorro = 0


async function votar(botao) {
    // FOTO GATO
    var fotoGato = document.getElementById("fotoGato")

    var endpointFotoGato = "https://api.thecatapi.com/v1/images/search"

    var response = await fetch(endpointFotoGato)
    var bodyJson = await response.json()

    var imagemGato = bodyJson[0].url

    fotoGato.src = imagemGato

    // FOTO CACHORRO
    var fotoCachorro = document.getElementById("fotoCachorro")

    var endpointFotoCachorro = "https://dog.ceo/api/breeds/image/random"

    var responseC = await fetch(endpointFotoCachorro)
    var bodyJsonC = await responseC.json()

    var imagemCachorro = bodyJsonC.message

    fotoCachorro.src = imagemCachorro

    // FATO GATO
    var fatoGato = document.getElementById("fatoGato")

    var endpointFatoGato = "https://catfact.ninja/fact?max_length=95"

    var responseFG = await fetch(endpointFatoGato)
    var bodyJsonFG = await responseFG.json()

    fatoGato.innerText = bodyJsonFG.fact

    // FATO CACHORRO

    // debugger

    // var fatoCachorro = document.getElementById("fatoCachorro")

    // var endpointFatoCachorro = "https://dog-api.kinduff.com/api/facts"

    // var responseFC = await fetch(endpointFatoCachorro)
    // var bodyJsonFC = await responseFC.json()

    // fatoCachorro.innerText = bodyJsonFC[0].facts

    if (botao === 1) {
        votoGato = votoGato + 1
    } else if (botao === 2) {
        votoCachorro = votoCachorro + 1
    }

    var pontuacaoGato = document.getElementById("pontuacaoGato")
    var pontuacaoCachorro = document.getElementById("pontuacaoCachorro")

    pontuacaoCachorro.innerText = votoCachorro
    pontuacaoGato.innerText = votoGato

    var aside = document.getElementById("aside")

    if (votoCachorro == 10) {
        var h2 = document.createElement("h2")
        h2.innerText = "VOCÊ É UM DOGPERSON!"
        h2.classList.add("animalPerson")

        aside.append(h2)
    } else if (votoGato == 10) {
        var h2 = document.createElement("h2")
        h2.innerText = "VOCÊ É UM CATPERSON!"
        h2.classList.add("animalPerson")

        aside.append(h2)
    }
}
// API FATOS CACHORROS
// https://dog-api.kinduff.com/api/facts (NÃO TEM COMO ESPECIFICAR TAMAMHO)

votar()

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
}


// PLACAR
// var placarGato = document.getelementbyId("pontoGato")
// document.createElement("p")
// var placarCachorro = document.getelementbyId("pontoCachorro")
// document.createElement("p")

// RESULTADOS: classe: animalPerson
// VOCÊ É UM CATPERSON!
// VOCÊ É UM DOGPERSON!
// document.createElement("h2")
// h2 innerText = resultado


// RESULTADOS: classe: animalPerson
// VOCÊ É UM CATPERSON!
// VOCÊ É UM DOGPERSON!
// document.createElement("h2")
// h2 innerText = resultado

// API FATOS GATOS
// var fatosGatos = document.getelementbyId("fatosGatos")
// document.createElement("h3")
// máximo 95 caracteres
// https://catfact.ninja/fact?max_length=95

// API FATOS CACHORROS
// var fatosCachorros = document.getelementbyId("fatosCachorros")
// document.createElement("h3")
// máximo 95 caracteres
// https://dog-api.kinduff.com/api/facts (NÃO TEM COMO ESPECIFICAR TAMAMHO)


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



    // FATO CACHORRO


}


// PLACAR
// var placarGato = document.getelementbyId("pontoGato")
// document.createElement("p")
// var placarCachorro = document.getelementbyId("pontoCachorro")
// document.createElement("p")



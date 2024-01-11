const numeroN = parseInt(prompt("inserisci qui il tuo numero"))

if ((numeroN) && numeroN > 0) {
    const spanHtml = document.getElementById("risultato")

    for (let i = 1; i <= numeroN; i++) {
        const cubo = i * i * i

        spanHtml.innerHTML += `I tuoi numeri sono: ${cubo} <br>`
    }
} else {
    console.log("Inserisci un numero valido.")
}


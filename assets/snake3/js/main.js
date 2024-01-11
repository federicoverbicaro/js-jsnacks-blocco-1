let somma = 0 

for (let i = 1; i <= 10; i++){
    const inputUtente = prompt(`Inserisci il numero ${i}:`)

    const numeroInserito = parseInt(inputUtente)

    if (numeroInserito){
        somma += numeroInserito
    }else{
        alert (`L'imput ${inputUtente} non è un numero. Riprova.`  )
    }
}

const spanHtml = document.getElementById("risultato")
spanHtml.innerHTML = `La somma dei tuoi numeri é: ${somma}`



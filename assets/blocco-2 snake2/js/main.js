

const nomi = ["Federico","Francesco","Mattia","Letizia","Martina","Giorgia"]

const cognomi = ["Rossi","Francescani","Lobutto","Buchanan","Nike","Cogoleto"]

const numeroInvitati = 10 

const invitatiFalsi = []

for ( let i = 0; i < numeroInvitati; i++){
    const nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)]

    const cognomeCasuale = cognomi [Math.floor(Math.random() * cognomi.length)]

    invitatiFalsi.push(`${nomeCasuale} ${cognomeCasuale}`)
}

const listaInvitatiFalsiHtml = document.getElementById("listaInvitatiFalsi")

for (let i = 0; i < invitatiFalsi.length; i++){
     const listItems = document.createElement ("li")
     listItems.textContent = invitatiFalsi[i]
     listaInvitatiFalsiHtml.appendChild(listItems)
}

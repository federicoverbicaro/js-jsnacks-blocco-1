const numeri = [
    "3",
    "4",
    "7",
    "9",
    "22",
    "43",
    "52"
]

let numeriInteri = 0

for (let i = 0 ; i < numeri.length; i++){
    if(i % 2 !== 1){
         
        numeriInteri += parseInt(numeri[i], 10)
    }
}

const spanHtml = document.getElementById("risultato")
spanHtml.innerHTML = `la somma dei numeri dispari è: ${numeriInteri}`

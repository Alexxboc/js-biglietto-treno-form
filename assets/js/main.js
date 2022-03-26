/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Chiedi all'utente i dati 

const button = document.getElementById(`save_data`);



button.addEventListener (`click`, 
function(){
    console.log(`click`)
    let user_name = document.getElementById(`name`).value;
    let km_da_percorrere = Number(document.getElementById("percorso").value);
    let user_age = document.getElementById(`fascia_eta`).value;
    
    console.log(user_name , km_da_percorrere , user_age);
})

// Calcolare il prezzo del biglietto standard

const prezzo_standard = km_da_percorrere * 0.21;

// Calcoloare prezzo finale  

let prezzo_finale;

if (user_age == `under 18`) {
     prezzo_finale = prezzo_standard - (prezzo_standard * 0.2);
    
} else if (user_age == `over 65`) {
     prezzo_finale = prezzo_standard - (prezzo_standard * 0.4);
} else {
    prezzo_finale = prezzo_standard;
}

console.log(`Il prezzo del tuo biglietto è di ${prezzo_finale.toFixed(2)} €`)















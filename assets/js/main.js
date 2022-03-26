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
// Chiedi all'utente il nome e il cognome
    let user_name = document.getElementById(`name`).value;

// Chiedi all'utente quanti km deve percorrere
    let km_da_percorrere = Number(document.getElementById(`percorso`).value);
    if (isNaN(km_da_percorrere)) {
        alert(`Nel campo Km da percorrere scrivi un valore numerico`)
    }
// Chiedi all'utente la fascia d'età
    let user_age = document.getElementById(`fascia_eta`).value;

// Calcola il prezzo standard
    const prezzo_standard = km_da_percorrere * 0.21;
    console.log(user_name , km_da_percorrere , user_age , prezzo_standard);

// Calcola il prezzo finale con l'eventuale sconto applicato
    let prezzo_finale;
    if (user_age == `under 18`) {
     prezzo_finale = prezzo_standard - (prezzo_standard * 0.2);
    } else if (user_age == `over 65`) {
     prezzo_finale = prezzo_standard - (prezzo_standard * 0.4);
    } else {
    prezzo_finale = prezzo_standard;
}

// Comunica il prezzo finale all'utente
console.log(`Ciao ${user_name} Il prezzo del tuo biglietto è di ${prezzo_finale.toFixed(2)} €`)

// Stampa l'offerta sul biglietto in base alla fascia d'età
const elementOfferta = document.querySelector(`.offerta`)
if (user_age == `under 18`){
    elementOfferta.innerHTML = `Sconto minorenne`
} else if (user_age == `over 65`){
    elementOfferta.innerHTML = `Sconto over`
} else 
    elementOfferta.innerHTML = `Standard`

})


















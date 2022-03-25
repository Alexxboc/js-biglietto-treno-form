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
    var user_name = document.getElementById(`user_name`).value;
    var km_da_percorrere = document.getElementById(`km_da_percorrere`).value ;
    var user_age = document.querySelector(`.user_age`).value;
    console.log(user_name , km_da_percorrere , user_age)
})

// Traformare 



// Calcolare il prezzo del biglietto per chilometro

const prezzo_per_km = km_da_percorrere * 0.21;
console.log(prezzo_per_km);

// Trasformare gli sconti da valori percentuali a valori decimali









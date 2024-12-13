


let selezione_bevanda = prompt(`Indica il nr. corrispendente alla bevanda che desideri : \n 1 Acqua \n 2 Coca Cola \n 3 Birra`);


while ( selezione_bevanda != 1, selezione_bevanda != 2, selezione_bevanda != 3 ) {

    selezione_bevanda = prompt ( `Selezione non valida : inserisci un numero tra 1 e 3` )

}


if ( selezione_bevanda == 1) {
    console.log( `E' stata selezionata l'acqua` );   
} else if( selezione_bevanda == 2) {
    console.log( `E' stata selezionata Coca-Cola` );
} else { console.log( ` E' stata selezionata Birra` );
 }
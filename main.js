
// Metodo Switch

let bevanda_1 = `Acqua`;
let bevanda_2 = `Coca-cola`;
let bevanda_3 = `Birra`;

let scelta_x;

do{
    scelta_x = Number (prompt ( `Inserisci il nr corrispondente alla bevanda scelta \n 1 Acqua \n 2 Coca-cola \n 3 Birra`));

    switch (scelta_x) {
        case 1:
            console.log(`Hai scelto ${bevanda_1}`);
            break;

        case 2:
            console.log(`Hai scelto ${bevanda_2}`);
            break;

        case 3:
            console.log(`Hai scelto ${bevanda_3}`);
            break;
    
        default:
            console.log(`scelta non valida`);
            
            break;
    }


}while (scelta_x != 1 && scelta_x != 2 && scelta_x != 3 )



// Metodo If/Else

// let bevanda_4 = `Spuma`;

// let bevanda_5 = `Limonata`;

// let bevanda_6 = `Chinotto`;

// let bevanda_scelta;

// do{
//         bevanda_scelta = prompt ( ` Inserisci il nr corrispondente alla bevanda che desideri: \n 4 Spuma \n 5 Limonata \n 6 Chinotto` )

//         if( bevanda_scelta == 4) {
//                 console.log(`La bevanda scelta è ${bevanda_4}` );
                
//         }else if ( bevanda_scelta == 5 ){
//                 console.log( `La bevanda scelta è ${bevanda_5}` );
                
//         }else if ( bevanda_scelta == 6 ) {
//                 console.log( ` La bevanda scelta è ${bevanda_6}` );
                
//         } else { console.log( `Selezione non valida`);
//         }

// }while (bevanda_scelta != 4 && bevanda_scelta != 5 && bevanda_scelta != 6 )
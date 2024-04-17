import { emberekLista } from "./adat.js";
import { rendez, szures, torol } from "./adatkezelo.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { ujAdat } from "./urlapKezelo.js";


/* jelenitsuk meg a listankat egy tablazatban, majd a listat tudjuk rendezni pl nev szerint, 
ha rakattintunk a tablazat fejlecere, akkor rendezze be a tablazat sorait, 
tudjunk szurni nev alapjan, 
tudjunk uj adatot hozzaadni a tablazathoz, 
tudjuk torolni a tablazat egy sorat */
 
/* fuggvenyek es eljarasok */ 
/* 1. htmlosszeallit(lista) -> txt | osszeallitja a tablazat html szerkezetét egy szoveges valtozoba
   2. megjelenit(txt) -> megjelenitette egy adott html elemben a parametereben kapott szoveget
   3. rendez(lista) -> rendezettLista  | 
   a parametereben kapott listat nev szerint megrendezi: 
    a fuggveny akkor fut le, ha a tablazat nev fejlecere kattintottunk
   4. adatHozzaadas(lista) -> kibovitettLista | osszegyujti az urlaprol az adatokat,
      es osszeallit belole egy objektumot , majd azt beleteszi a listába: a fuggveny akkor fut le,
      ha rakattintunk a hozzaad gombra 
   5. torol(lista, id) -> kitorli a listabol azt az adott id-jű elemet amelyre kattintottunk, 
      es akkor fog lefutni, ha a sor melletti torol gombra kattintunk 
   6. szures(lista) -> szurtLista | a keresomezobe beirt szoveget keresi a lista objektumainak nev mezojeben.
       mindez akkor fut le, ha beirunk valamit a keresomezobe */ 

let irany = 1 // 1 - novekvo rendezes, -1 csokkeno rendezes

init(emberekLista)
szuresEsemeny()


export function init(lista){ 

    megjelenit(htmlOsszeallit(lista))
    rendezEsemeny()
    torolEsemeny()
}

function szuresEsemeny(){
const keresoElem = $("#szuro")
keresoElem.on("keyup", function(){
    let keresoSzoveg = keresoElem.val()
    const szLista = szures(emberekLista, keresoSzoveg)
    console.log(szLista)
    init(szLista)
})
}


function rendezEsemeny(){
    const nevELEM =  $(".adatok table th").eq(0)
    nevELEM.on("click", function(){
        const rLISTA = rendez(emberekLista, irany) 
        //console.log(rLISTA)
        init(rLISTA)
        irany *= (-1)

})
}


function torolEsemeny(emberekLista, id){


    const torolGOMB = $(".torol")
    torolGOMB.on("click", function(event){
        let id = event.target.id
        const LISTA = torol(emberekLista, id)
        init(LISTA)
})

}

ujAdat(emberekLista);

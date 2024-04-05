import { emberekLista } from "./adat.js";

// függvény - működik a hoisting - deklaráció a hatóköre tetejére mászik == bárhol elérhető
function kiir(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index]
        console.log(element);
        console.log(lista[index]);
        
    }
}

kiir(emberekLista)


// függvény kifejezés változónak adjuk értékül a függvényt -- nem működik a hoisting    
const kiir2 = function(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index]
        console.log(element);
        console.log(lista[index]);
        
    }
}

kiir2(emberekLista)


function kiir3(lista){
   // console.log("forEach")
  //  lista.forEach((element, index) => {
   //    console.log(element, index) 
 //   });

    lista.forEach(function(ember, i) {
        console.log(ember, i) 
     });
}

kiir3(emberekLista)

function idosebb20(lista){
    const idosebb20Lista = lista.filter(function(ember){
        return ember.kor > 20
    })

    console.log(idosebb20Lista)

}

idosebb20(emberekLista)

// 20 évnél idősebb férfiak listája
function ferfiak(lista){
    const ferfiakLista = lista.filter(function(ember){
        return ember.nem && ember.kor > 20
    })
    console.log(ferfiakLista)
}

ferfiak(emberekLista)


// lista rendezése kor szerint

function rendez(lista){
    console.log("rendezés*****************")
    lista.sort(function( e1, e2){
        console.log(e1.kor, e2.kor, e2.kor-e1.kor)
        return e2.kor - e1.kor
    })
    console.log(lista)
}
rendez(emberekLista)

function kever(lista){
    console.log("véletlen sorrend *****************")
    lista.sort(function(){
        return Math.random() - 0.5; 
    })
    console.log(lista)
}

kever(emberekLista)
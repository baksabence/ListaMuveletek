// 1. az urlaprol osszegyujtjuk az adatokat a submit gombra kattintva,
// beletesszük a listába
import { init } from "./main.js";

export function ujAdat(lista){

    const nevElem = $("#nev")
    const korElem = $("#kor")
    const nemElem = $("input[name='nem']:checked")
    const submitElem = $("#submit")
    const adatOBJ = {
        nev: "",
        kor: 0,
        nem: false

    }
    submitElem.on("click", function(event){
        event.preventDefault(); // leszedi az alapértelmezett hozzárendelt eventet
        adatOBJ.nev = nevElem.val()
        adatOBJ.kor = korElem.val()
        adatOBJ.nem = (nemElem.val() === "true" ? true : false)
        console.log(adatOBJ);

        //sumbit ellenorzese    
        const validELEM = $(".valid-feedback")
        const nevVALIDE = validELEM.eq(0).css("display") !== "none"
        const korVALIDE = validELEM.eq(1).css("display") !== "none"
        console.log(nevVALIDE, korVALIDE)   
        if(nevVALIDE && korVALIDE) {
            lista.push(adatOBJ)
            init(lista)
        }else{
            console.log("Hibás adatok!")
        }

        lista.push(adatOBJ);
        init(lista);
    })


}
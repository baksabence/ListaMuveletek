export function htmlOsszeallit(lista){
    // tablazatot allitok ossze
    let txt = "<table class = 'table table-striped'>"
    txt += "<thead><tr> <th>Név: </th> <th> Kor: </th> <th> Nem: </th> <th> </th> </tr><thead>"
    txt += "<tbody>"
    lista.forEach((elem, index) => {
        //tablanak egy sora
        txt += `<tr>`
        console.log(elem)
        for(const kulcs in elem){
            /* objektumokat járhatunk be*/
            //console.log("kulcs", kulcs, elem[kulcs])
            txt += `<td>${elem[kulcs]}</td>`
        }
         
        txt += `<td class='torol' id=${index}> 🗑️  </td>`
        txt += `</tr>`
        
    });

    txt += "</tbody></table>"
    return txt;
}

export function megjelenit(txt){
    const divElem = $(".adatok")
    divElem.html(txt)
}
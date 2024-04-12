export function rendez(lista, irany){
     lista.sort(function(e1, e2){
        let eredmeny = 1;
        if(e1.nev < e2.nev){
            eredmeny = -1

        }
        // sort minden lehetseges listaelem part osszehasonlit (nev) 
        //    es ha a visszateresi erteke pozitiv akkor nem cserel, ha negativ akkor cserel 
         return eredmeny * irany
     })
     // szorgalmi : irj egy olyan fv-t an az ekez
     return lista
}

export function szures(lista, keresoSzoveg){
    const szurtLista = lista.filter(function(ember){
        return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })

    return szurtLista
}

export function torol(lista, id){
    lista.splice(id, 1)
    return lista

}
# Listakezelő függvények gyakorlás

## Specifikáció
/* jelenitsuk meg a listankat egy tablazatban, majd a listat tudjuk rendezni pl nev szerint, 
ha rakattintunk a tablazat fejlecere, akkor rendezze be a tablazat sorait, 
tudjunk szurni nev alapjan, 
tudjunk uj adatot hozzaadni a tablazathoz, 
tudjuk torolni a tablazat egy sorat */

## Metódusok

   1. **htmlosszeallit(lista) -> txt** | osszeallitja a tablazat html szerkezetét egy szoveges valtozoba
   2. **megjelenit(txt)** -> megjelenitette egy adott html elemben a parametereben kapott szoveget
   3. **rendez(lista)** -> rendezettLista  | 
   a parametereben kapott listat nev szerint megrendezi: 
    a fuggveny akkor fut le, ha a tablazat nev fejlecere kattintottunk
   4. **adatHozzaadas(lista)** -> kibovitettLista | osszegyujti az urlaprol az adatokat,
      es osszeallit belole egy objektumot , majd azt beleteszi a listába: a fuggveny akkor fut le,
      ha rakattintunk a hozzaad gombra 
   5. **torol(lista, id)** -> kitorli a listabol azt az adott id-jű elemet amelyre kattintottunk, 
      es akkor fog lefutni, ha a sor melletti torol gombra kattintunk 
   6. **szures(lista, keresoSzoveg)** -> szurtLista | a keresomezobe beirt szoveget keresi a lista objektumainak nev mezojeben.
       mindez akkor fut le, ha beirunk valamit a keresomezobe
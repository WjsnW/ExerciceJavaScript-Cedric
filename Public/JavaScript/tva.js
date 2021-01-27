function calcule() {
    let nbr = document.getElementById('art').value;
    let opt1 = document.getElementById('taxe').value;
    let opt2 = document.getElementById('combient').value;
    let somme;

    if (nbr.match(/^[\d.]{1,}$/g)) {
        if (opt1 == "ht"){
            somme = nbr * opt2;
            opt1 = "TTC";
        } else{
            somme = nbr / opt2;
            opt1 = "HT";
        }
        somme = Math.round(somme * 100) / 100;
        document.getElementById('resul').innerHTML = "Le montand et de : "+somme+"€ "+opt1;
        document.getElementById('resul').style.color = "green"; 
    } else{
       document.getElementById('resul').innerHTML = "Veuillez completer le champs avec un nombre";
       document.getElementById('resul').style.color = "red"; 
    }
}
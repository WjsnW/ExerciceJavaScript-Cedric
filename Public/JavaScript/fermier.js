/* ***** page formulaire ***** */
// verifier entree
function controle(qui) {
    let flag = true;
    if (qui.value == "") {
        qui.style.border = "red 1px solid";
        flag = false;
        qui.focus();
    } else {
        qui.style.border = "black 1px solid";
    }
    return flag
}

function controleNbr(qui) {
    let flag = true;
    if (qui.value != "" && qui.value.match(/^\d$/)) {
        qui.style.border = "black 1px solid";
    } else {
        qui.style.border = "red 1px solid";
        flag = false;
    }
    return flag
}
// voir si sa existe
const race = document.getElementById('race');
const nom = document.getElementById('nom');
const color = document.getElementById('color');
const colorEggs = document.getElementById("colorEggs");
const nbrJ = document.getElementById('eggsNbr');

class Poule{
    constructor(race,nom,color,colorEggs,nbrJ){
        this.race = race,
        this.nom = nom,
        this.color = color,
        this.colorEggs = colorEggs,
        this.nbrJ = nbrJ;
    }
}

let poulayer = [new Poule("Poulette", "Pomme", "blanc", "blanc", 4)];

function existe() {
    if (poulayer.find(i => i.nom == nom.value)) {
        let p = document.createElement("p");
        p.textContent = "Se nom est déjà prit !";
        p.id = "existe";
        nom.insertAdjacentElement("afterend",p);
        nom.style.border = "red 1px solid";
        nom.focus();
    } else {
        try{
            let p = document.getElementById("existe");
            p.remove();
        }catch{}
        poulayer.push(new Poule(race.value, nom.value, color.value, colorEggs.value, +nbrJ.value));
        let p = document.createElement("p");
        p.textContent = nom.value+" à etait rajouter";
        p.id = "raj";
        nbrJ.insertAdjacentElement("afterend",p);
        race.value = "";
        nom.value = "";
        color.value = "";
        colorEggs.value = "";
        nbrJ.value = "";
    }
}

// au click rajouter
function rajouter() {
    let ok = 0;
    try{
        let p = document.getElementById("raj");
        p.remove();
    }catch{}


    if (controleNbr(nbrJ)) {
        ok++ ;
    }
    for (i of [colorEggs,color,nom,race]) {
        if (controle(i)){
            ok++ ;
        }
    }
    if (5 == ok) {
        existe();
    }
    return false
}

/* ***** page tableau ***** */
// remplir tableau
const tabBody = document.getElementsByTagName("tbody")[0];
const tabTotal = document.getElementById('tabTotal');

function remplirTab() {
    let s;
    let m;
    let a;
    let tt = 0;
    let somme =0;
    let texte = "";
    for (i of poulayer) {
        s = Math.ceil(i.nbrJ*7);
        m = Math.ceil((s-(s*0.05))*4.33);
        a = Math.ceil( m*12);
        tt = 0;
        switch (i.colorEggs) {
            case "beige":
                tt = Math.ceil(a*1);
                break;
            case "bleu":
                tt = Math.ceil(a*1.2);
                break;
            case "vert":
                tt = Math.ceil(a*1.3);
                break;
            case "brun":
                tt = Math.ceil(a*2);
                break;
            case "blanc":
                tt = Math.ceil(a*1.6);
                break;
        }
        somme += tt;
        texte += '<tr>'+
        '<td>'+i.race+'</td>'+
        '<td>'+i.nom+'</td>'+
        '<td>'+i.color+'</td>'+
        '<td>'+i.colorEggs+'</td>'+
        '<td>'+i.nbrJ+'</td>'+
        '<td>'+s+'</td>'+
        '<td>'+m+'</td>'+
        '<td>'+a+'</td>'+
        '<td>'+tt+' €</td>'+
        '</tr>';
    }
    tabBody.innerHTML = texte;
    tabTotal.innerText = somme+" €";
}

// au click de voir
const formulaire = document.getElementsByTagName('form')[0];
const formTab = document.getElementsByTagName('form')[1];

function affTab(){
    formulaire.style.display = "none";
    formTab.style.display = "block";
    remplirTab();
}
function voirForm() {
    formulaire.style.display = "flex";
    formTab.style.display = "none";
    return false
}
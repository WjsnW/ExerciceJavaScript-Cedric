/* variable */
const nomP = document.getElementById('produit');
const nbrP = document.getElementById('nbr');
const prixP = document.getElementById('prix');
let stock = [["ram",10,60],["carte mere",50,10]];
stock.sort();

// permet de completer le tableau et d'afficher la quantiter
function existe() {
    let flag = false;
    for (i of stock) {
        if (i[0] == nomP.value) {
            i[1] += +nbrP.value;
            console.log(i[1]);
            flag = true;
            document.getElementById('reponse').textContent = "Il y a "+i[1]+" de produit "+i[0]+" dans le stock";
            break;
        }
    }
    if (!flag) {
        stock.push([nomP.value, +nbrP.value, Math.round(prixP.value*100)/100]);
        stock.sort();
        document.getElementById("reponse").textContent = "Le nouveau produit : "+nomP.value+" à était ajouter avec une quantités de : "+nbrP.value;
    }
}

// Verifier champs
function champOk(){
    let flag = true;
    // prix
    if (prixP.value.match(/^\d{0,}[.,]\d{0,}$/) || prixP.value.match(/^\d{0,}$/) && prixP.value != "") {
        prixP.value.replace(",",".");
        prixP.style.border = "black 1px solid";
    } else {
        prixP.style.border = "red 1px solid";
        flag = false;
        prixP.focus();
    }
    // quantiter
    if (nbrP.value.match(/^\d{0,}$/) && nbrP.value != "") {
        nbrP.value.replace(",",".");
        nbrP.style.border = "black 1px solid";
    } else {
        nbrP.style.border = "red 1px solid";
        flag = false;
        nbrP.focus();
    }
    // nom
    if (nomP.value == "") {
        nomP.style.border = "red 1px solid";
        flag = false;
        nomP.focus();
    } else {
        nomP.style.border = "black 1px solid";
    }
    return flag
}

// action au clique du boutons envoyer
function envoyer(){
    if (champOk()) {
        existe();
        nomP.value = "";
        nbrP.value = "";
        prixP.value = "";
        nomP.focus();
    }
    return false
}

// voir le tableau
function voirTab(){
    let texte = "<table><thead><tr><td>Nom du produit</td><td>Quantiter</td><td>Prix unitaire</td><td>Prix ensembles</td></tr></thead><tbody>";
    let somme = 0;
    let total = 0;
    for (i of stock) {
        somme = i[1] * i[2];
        total += somme;
        texte += "<tr><td>Nom : "+i[0]+"</td><td>Nombres : "+i[1]+"</td><td>Prix : "+i[2]+" €</td><td>"+somme+" €</td></tr>";
    }
    texte += "</tbody><tfoot><tr><td colspan='2'></td><td id='tabTotal'>Total stock :</td><td>"+total+" €</td></tr></tfoot></table>";
    return texte
}

// action au click sur voir
function voir(){            
    document.getElementById('tab').innerHTML = voirTab();
}
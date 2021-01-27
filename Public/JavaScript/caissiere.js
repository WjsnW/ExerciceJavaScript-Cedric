function calcule() {
    let vend = document.getElementById("vend").value;
    let clien = document.getElementById('client').value;
    let somme;
    if (vend.match(/^[\d.]{1,}$/g) && clien.match(/^[\d.]{1,}$/g)){
        somme = vend - clien;
        if (somme >= 0 ){
            alert("Vous dever rendre : "+somme+" €");
        } else{
            alert("Le client doit encore donnée : "+ -somme+" €");
        }
    } else{
        alert("veuiller completer tous les champs par des nombre");
    };
};
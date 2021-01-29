/* formulaire */
const estimer = document.getElementById("estimer");
/* erreur */
const errmarque = document.getElementById('errMarque');
const errmodele = document.getElementById("errModele");
const errtype = document.getElementById("errType");
const errorigine = document.getElementById("errOrigin");
const errkm = document.getElementById("errKm");
const errneuve = document.getElementById("errNeuve");
const errprevoir = document.getElementById("errPrevoir");
const errestimer = document.getElementById("errEstimer");
/* variable */
flag = 0;
somme = 0;


/* permet de verifier si il et completait */
function complete(qui,quoi) {
    if (qui == "" || qui =="vide") {
        quoi.style.color = "red";
    }else{
        quoi.style.color = "rgba(0, 0, 0, 0)";
        flag += 1;
    };
};

/* Prix */
function prix(){
    console.log('ici');
    if (document.getElementById("neuve").value >= 50000){
        document.getElementById("envoyer").style.display = "none";
        document.getElementById("errTrop").style.display = "block";
    }else{
        document.getElementById("envoyer").style.display = "block";
        document.getElementById("errTrop").style.display = "none";
    }
}

/* appuie sur le bouton */
function calcule() {
    let marque = document.getElementById("marque").value;
    let modele = document.getElementById("modele").value;
    let type = document.getElementById("type").value;
    let origine = document.getElementById("origin").value;
    let km = document.getElementById("km").value;
    let neuve = document.getElementById("neuve").value;
    let prevoir = document.getElementById("prevoir").value;
    let tab1 = [marque,modele,type,origine,km,neuve,prevoir];
    let tab2 = [errmarque,errmodele,errtype,errorigine,errkm,errneuve,errprevoir,errestimer];
    for (let i = 0; i < 7; i++) {
        complete(tab1[i],tab2[i]);
    }
    if (flag == 7){
        switch(origine){
            case "France":
                if (type == "Essence"){
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.1 );
                    }else{
                        somme = neuve - ( km*0.09 );
                    }
                }else{
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.11 );
                    }else{
                        somme = neuve - ( km*0.10 );
                    }
                };
                break;
            case "Allemagne":
                if (type == "Essence"){
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.06 );
                    }else{
                        somme = neuve - ( km*0.8 );
                    }
                }else{
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.1 );
                    }else{
                        somme = neuve - ( km*0.09 );
                    }
                };
                break;
            case "Italie":
                if (type == "Essence"){
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.5 );
                    }else{
                        somme = neuve - ( km*0.7 );
                    }
                }else{
                    if (prevoir == "Oui"){
                        somme = neuve - ( km*0.09 );
                    }else{
                        somme = neuve - ( km*0.08 );
                    }
                };
                break;
        };
        document.getElementById("resultat").style.display = "block";
        document.getElementById("rMarque").innerHTML = marque;
        document.getElementById("rModele").innerHTML = modele;
        document.getElementById("rType").innerHTML = type;
        document.getElementById("rOrigin").innerHTML = origine;
        document.getElementById("rKm").innerHTML = km;
        document.getElementById("rPrevoir").innerHTML = prevoir;
        document.getElementById("rEstimer").innerHTML = " "+somme+" €";
    };
    flag = 0;
    console.log("ok" + somme);
    return false
};
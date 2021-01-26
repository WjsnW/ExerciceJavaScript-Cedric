// sert a vérifier que les champs ne sont pas vide
function champValide(ref){
    if (document.getElementById(ref).value.length > 0){
        document.getElementById(ref + 'F').style.display = "none";
        return true
    } else{
        document.getElementById(ref + "F").style.display = "block";
        if (ref == "lieu-n"){
            document.getElementById(ref + "F").innerHTML = "Vous devez saisir votre lieu de naissance de naissance";
        } else if (ref == "signe"){
            document.getElementById(ref + "F").innerHTML = "Vous devez saisir votre signe astrologique";
        } else if (ref == "mdp1" || ref == "mdp2") {
            document.getElementById(ref + "F").innerHTML = "Vous devez rentre un mots de passe"
        } else if (ref == "presen"){
            document.getElementById(ref + "F").innerHTML = "Vous devez saisir une présentation"
        } else {
        document.getElementById(ref + "F").innerHTML = "Vous devez saisir votre "+ref;
        };
    };
};
// controle que la date soit dans le bon format
function dateN(){
    let date = document.getElementById("date").value;
    console.log("ici");
    if ( date.match(/^[0-3]\d-[0-1]\d-\d{4}$/g)){
        document.getElementById("dateF").style.display = "none";
        return true
    } else{
        document.getElementById("dateF").style.display = "block";
        document.getElementById("dateF").innerHTML = "La date de naissance doit impérativement être au format dd-mm-yyyy";
    };
};

// controle email
function email(){
    if (document.getElementById("email").value.match(/^[\w-\.]{1,}@[\w-]{1,}\.[\w-]{2,3}$/g)){
        document.getElementById("emailF").style.display = "none";
        return true
    } else{
        document.getElementById("emailF").style.display = "block";
        document.getElementById("emailF").innerHTML = "Veuillez saisir une email correct";
    }
}
// controle mdp
function mdp(){
    let mdp1 = document.getElementById("mdp1").value;
    let mdp2 = document.getElementById('mdp2').value;
    if ( mdp1 == mdp2 ){
        document.getElementById("mdp1F").style.display = "none";
        document.getElementById("mdp2F").style.display = "none";
        return true
    } else{
        document.getElementById("mdp1F").style.display = "block";
        document.getElementById("mdp1F").innerHTML = "Veuillez entrer le même mot de passe";
        document.getElementById("mdp2F").style.display = "block";
        document.getElementById("mdp2F").innerHTML = "Veuillez entrer le même mot de passe";
    }
}

// controle nombre cara
function nbrCara(){
    if (document.getElementById("presen").value.length > 9 && document.getElementById('presen').value.length < 16){
        document.getElementById("presenF").style.display = "none";
        return true
    } else{
        document.getElementById("presenF").style.display = "block";
        document.getElementById("presenF").innerHTML = "Veuillez entrer entre 10 et 15 caractére";
    }
}
// fonction au clique de l'envoi du formulaire
function envoyer(){
    let a = 0;
    for (let i of ["nom","prenom","date","lieu-n","email",'mdp1',"mdp2","presen"]){
        if (champValide(i)){
            console.log("ok");
            a += 1;
        }
    }
    
};
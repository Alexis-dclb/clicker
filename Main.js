var vinyl=document.getElementById("vinyl");
var ATotalCookie=document.getElementById("count");
var AMultiplicateur=document.getElementById('compteur_multiplicateur');
var Aprix=document.getElementById('prix');


var angle=0;
setInterval(function(){
    vinyl.style.transform="rotateZ("+ angle++ +"deg)";
}, 10);


var compteur = 0;
function augmenterNombreCompteur() {
    compteur+=1*AMultiplicateur.innerHTML;
    ATotalCookie.textContent=compteur;
    console.log(compteur)

}

var multiplicateur = 2;
var prixPardefaut= 50;
var prix = prixPardefaut;
function augmenterMultiplicateur(){
        /*******cout de l'augmentation******/

        if(compteur>=prix){
            multiplicateur+=1;
            AMultiplicateur.textContent=multiplicateur;
            compteur = ATotalCookie.innerHTML = ATotalCookie.innerHTML - prix;

            prix =Math.pow(prix,1.20);
            prix = Math.ceil(prix);
            Aprix.textContent = prix;

            
            console.log(prix)
        }

    else{
        alert("trop pauvre le prix est de "+prix)
    }


}




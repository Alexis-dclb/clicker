var vinyl=document.getElementById("vinyl");
var ATotalCookie=document.getElementById("count");
var AMultiplicateur=document.getElementById('compteur_multiplicateur');


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

var multiplicateur = 1;
var prixPardefaut= 50;
var prix = 0;
function augmenterMultiplicateur(increment){

/*******cout de l'augmentation******/
if(multiplicateur == 1){
    prix = prixPardefaut;
}
else if(multiplicateur>1){
    prix =  2*multiplicateur*prix;
}

if(compteur>=prix){
    
/******Incrementation a chaque click******/
multiplicateur+=increment;
AMultiplicateur.textContent=multiplicateur;

compteur = ATotalCookie.innerHTML = ATotalCookie.innerHTML - prix;

}
else{
    alert("trop pauvre le prix est de "+prix)
}


}




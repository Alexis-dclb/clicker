var vinyl=document.getElementById("vinyl")
 
var angle=0;
setInterval(function(){
    vinyl.style.transform="rotateZ("+ angle++ +"deg)";
}, 10);


var compteur = 0;
function modifier(increment) {
compteur+=increment;
document.getElementById('count').value=compteur;
}


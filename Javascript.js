var img=document.getElementById("vinyl")
 
var angle=0;
setInterval(function(){
    img.style.transform="rotateZ("+ angle++ +"deg)";
}, 10);
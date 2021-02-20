window.onload = function(){
    var x =document.getElementById("box");
    var message = localStorage.getItem("message");
    var gender = localStorage.getItem("gender");
    x.innerHTML=message;
    x.addEventListener("mouseover", colorone); 
    x.addEventListener("mouseout", colortwo); 
    
    
    console.log(gender);
}

function colorone(){
    document.getElementById("box").style.backgroundColor="#42424200";
}
function colortwo(){
    var cor = localStorage.getItem("color");
    document.getElementById("box").style.backgroundColor=cor;
}


var cor = localStorage.getItem("color");
var x =document.getElementById("box");
var runner = document.querySelector(".runner");

window.onload = function(){
    var message = localStorage.getItem("message");
    var gender = localStorage.getItem("gender");
    
    x.innerHTML=message;
    x.style.backgroundColor=cor;
    x.addEventListener("mouseover", colorone); 
    x.addEventListener("mouseout", colortwo); 

    runner.addEventListener("mouseover", runone); 
    runner.addEventListener("mouseout", runtwo); 

    document.documentElement.style.setProperty('--act-color', cor);
}

function colorone(){
    x.style.backgroundColor="#42424200";
    
}

function colortwo(){
    x.style.backgroundColor=cor;
}

function runone(){
    runner.style.backgroundColor=cor;
}
    
function runtwo(){
    runner.style.backgroundColor= "#424242";
}   

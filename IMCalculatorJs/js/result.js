window.onload = function(){
    var cor = localStorage.getItem("color");
    var message = localStorage.getItem("message");

    document.getElementById("box").innerHTML=message;
    document.getElementById("box").style.backgroundColor=cor;
}
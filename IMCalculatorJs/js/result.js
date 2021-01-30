window.onload = function(){
    var cor = localStorage.getItem("color");
    var message = localStorage.getItem("message");
    console.log(cor);
    var result = message.fontcolor(cor);
    document.getElementById("txto").innerHTML=result;
}
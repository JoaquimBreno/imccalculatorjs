window.onload = function(){
    var cor = localStorage.getItem("color");
    var message = localStorage.getItem("message");
    var gender = localStorage.getItem("gender");

    document.getElementById("box").innerHTML=message;
    document.getElementById("box").style.backgroundColor=cor;
    console.log(gender);
}
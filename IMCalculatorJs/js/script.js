function clicar() {
  let num1 = window.document.getElementById("num1").value; //weight variavel
  let num2 = window.document.getElementById("num2").value; //height variavel

  let num3 = Math.pow(((parseFloat(num2))/100), 2); // calculate the height square
  let result = (parseFloat(num1))/num3; // gmi

  var imc = {
    peso: num1,
    altura: num2,
    resultado: result.toFixed(2) 
  };
  
  //Function who's analyze the imc result
  var demo = imcman(imc.resultado);
  //Cache files
  localStorage.setItem("message", demo.tx);
  localStorage.setItem("color", demo.colour);
  //Jump the page
  window.location.href = "result.html";
}

function imcman(resultado){
  if(resultado < 20.7){
    tx = "abaixo do peso";
    colour = "red";
  }
  else{
    tx = "acima do peso";
    colour = "blue";
  }
  return{
    tx:tx,
    colour:colour
  }
}


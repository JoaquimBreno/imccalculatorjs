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
  
  var str = imcman(imc.resultado); 

  //
  console.log(str.txt, str.color);
 // window.location.href = "result.html";
}

function imcman(resultado){
  if(resultado < 20.7){
    txt = "abaixo do peso";
    color = "vermelho";
  }
  else{
    txt = "acima do peso";
    color = "azul";
  }

  return {
    txt:txt,
    color:color
  };
}
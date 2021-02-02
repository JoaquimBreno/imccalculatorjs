function clicar() {
  let num1 = window.document.getElementById("num1").value; //weight variavel
  let num2 = window.document.getElementById("num2").value; //height variavel
  var gender = document.getElementsByName('gender');
  let num3 = Math.pow(((parseFloat(num2))/100), 2); // calculate the height square
  let result = (parseFloat(num1))/num3; // gmi

  for(var i = 0; i < gender.length; i++){
    if(gender[i].checked){
        var rate_value = gender[i].value;
    }
  }

  var imc = {
    peso: num1,
    altura: num2,
    resultado: result.toFixed(2) 
  };

  var demo;
  //Function who's analyze the imc result
  var rate_value = 'Feminino' ? demo = imcman(imc.resultado) : demo = imcwoman(imc.resultado);

  //Cache files
  localStorage.setItem("message", demo.tx);
  localStorage.setItem("color", demo.colour);
  localStorage.setItem("gender",rate_value);
  //Jump the page
  window.location.href = "result.html";  
}

function imcman(resultado){
  if( resultado < 20.7 ){
    tx = "ABAIXO DO PESO";
    colour = "#8c2a03";
    
  }
  else if( resultado <= 26.4 ){
    tx = "PESO IDEAL";
    colour = "#81ff61";    
  }
  else if (resultado <= 27.8 ){
    tx = "POUCO ACIMA DO PESO"
    colour = "#d2fa44";
  }
  else if( resultado <= 31.1){
    tx = "ACIMA DO PESO"
    colour = "#fac044";   
  }
  else{
    tx = "OBESIDADE";
    colour = "#F25811";
  }
  return{
    tx:tx,
    colour:colour
  }
}

function imcwoman(resultado){
  if( resultado < 19.1 ){
    tx = "ABAIXO DO PESO";
    colour = "#8c2a03";
  }
  else if( resultado <= 25.8 ){
    tx = "PESO IDEAL";
    colour = "#81ff61";    
  }
  else if (resultado <= 27.3 ){
    tx = "POUCO ACIMA DO PESO"
    colour = "#d2fa44";
  }
  else if( resultado <= 32.3){
    tx = "ACIMA DO PESO"
    colour = "#fac044";   
  }
  else{
    tx = "OBESIDADE";
    colour = "#F25811";
  }
  return{
    tx:tx,
    colour:colour
  }
}


function clicar() {
  var num1 = window.document.getElementById("num1").value;
  var num2 = window.document.getElementById("num2").value;

  var result = parseInt(num1) + parseInt(num2);
  window.document.getElementById("resultado").innerHTML = result;
}

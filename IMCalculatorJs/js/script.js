function clicar() {
  let num1 = window.document.getElementById("num1").value;
  let num2 = window.document.getElementById("num2").value;

  let num3 = Math.pow(((parseFloat(num2))/100), 2);
  let result = (parseFloat(num1))/num3;
  window.location.href()
}

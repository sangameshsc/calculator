
//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}



var x = document.getElementById("edu");
x.addEventListener("click", num1);
x.addEventListener("click", num2);

function myFunction() {
  alert ("solution");
}

function someOtherFunction() {
  alert (" u get solution ");
}

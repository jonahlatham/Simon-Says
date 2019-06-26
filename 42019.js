
function setToRed ( )
{
  document.getElementById("buttonClick").style.color = 'red';
  setTimeout ( "setToWhite()", 2000 );
}

function setToWhite ( )
{
  document.getElementById("buttonAfter").style.color = 'white';
}


onclick="setTimeout(myFunction, 3000);"

function myFunction(color) {
    style.color = 'white'
}
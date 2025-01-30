var bildIndex = 0;
diashow();

function diashow() {

  var i;                                                //Alle Bilder verstecken
  var x = document.getElementsByClassName("Diashow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  bildIndex++;
  if (bildIndex > x.length) {bildIndex = 1}
  x[bildIndex-1].style.display = "block";   //Jeweils ein Bild anzeigen
  setTimeout(diashow, 2000); 
}
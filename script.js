
function calculate()
{
 var capitaal = document.getElementById("startKapitaal").value;
  
  for  
    (var jaar = 2022; jaar < 2032; jaar++)
  {
    capitaal *= 2.05;
   console.log(capitaal.toFixed(2));
   document.getElementById("output").innerHTML += capitaal.toFixed(2) + "<br />";
  }
}
  
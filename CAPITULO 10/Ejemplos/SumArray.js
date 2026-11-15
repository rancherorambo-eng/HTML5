// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.8: SumArray.js
// Suma los elementos de un arreglo con for y for...in
function start()
{
   var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
   var total1 = 0, total2 = 0;

   // Itera a través de los elementos del arreglo en orden y suma 
   // el valor de cada elemento a total1
   var length = theArray.length; // obtiene la longitud del arreglo una vez antes del ciclo

   for ( var i = 0; i < theArray.length; ++i ) 
   {
      total1 += theArray[ i ];               
   } // fin de for

   var results = "<p>Total usando índices: " + total1 + "</p>";

   // Itera a través de los elementos del arreglo usando una instrucción
   // for...in para sumar el valor de cada elemento a total2
   for ( var element in theArray )  
   {
      total2 += theArray[ element ];
   } // fin de for

   results += "<p>Total usando for...in: " + total2 + "</p>";
   document.getElementById( "output" ).innerHTML = results;
} // cierre de la función start

window.addEventListener( "load", start, false );
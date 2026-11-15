// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.13: InitArray3.js
// Inicialización de arreglos multidimensionales. 
function start()
{
   var array1 = [ [ 1, 2, 3 ], // fila 0  
                  [ 4, 5, 6 ] ]; // fila 1
   var array2 = [ [ 1, 2 ], // row 0      
                  [ 3 ], // row 1        
                  [ 4, 5, 6 ] ]; // row 2

   outputArray( "Valores en array1 por fila", array1,
      document.getElementById( "output1" ) );
   outputArray( "Valores en array2 por fila", array2,
      document.getElementById( "output2" ) );
} // cierre de la función start

// muestra el contenido del arreglo
function outputArray( heading, theArray, output )
{
   var results = "";

   // itera a través del conjunto de arreglos unidimensionales
   for ( var row in theArray )                      
   {               
      results += "<ol>";

      // itera a través de los elementos de cada arreglo unidimensional
      for ( var column in theArray[ row ] ) 
      {
         results += "<li>" + theArray[ row ][ column ] + "</li>";
      } // fin del for interno
      
      results += "</ol>"; // fin de la lista ordenada
   } // fin del for externo

   output.innerHTML = results;
} // cierre de la función outputArray

window.addEventListener( "load", start, false );
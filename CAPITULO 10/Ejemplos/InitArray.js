// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.4: InitArray.js
// Crea dos arreglos, inicializa sus elementos y los muestra
function start()
{
   var n1 = new Array( 5 ); // asigna un arreglo de cinco elementos
   var n2 = new Array(); // asigna un arreglo vacío   
      
   // asigna valores a cada elemento del arreglo n1  
   var length = n1.length; // obtiene la longitud del arreglo una vez antes del ciclo

   for ( var i = 0; i < n1.length; ++i ) 
   {
      n1[ i ] = i;
   } // fin de for
   
   // crea e inicializa cinco elementos en el arreglo n2
   for ( i = 0; i < 5; ++i )
   {
      n2[ i ] = i;
   } // fin de for

   outputArray( "Arreglo n1:", n1, document.getElementById( "output1" ) );
   outputArray( "Arreglo n2:", n2, document.getElementById( "output2" ) );
} // cierre de la función start

// muestra el encabezado seguido de una tabla de dos columnas 
// que contiene los índices y los elementos de "elArreglo"  
function outputArray( heading, theArray, output )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Índice</th><th>Valor</th></thead><tbody>";

   // muestra el índice y el valor de cada elemento del arreglo
   var length = theArray.length; // obtiene la longitud del arreglo una vez antes del ciclo
   
   for ( var i = 0; i < length; ++i )   
   {
      content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + 
         "</td></tr>";
   } // fin de for

   content += "</tbody></table>";
   output.innerHTML = content; // coloca la tabla en el elemento de salida
} // cierre de la función outputArray

window.addEventListener( "load", start, false );
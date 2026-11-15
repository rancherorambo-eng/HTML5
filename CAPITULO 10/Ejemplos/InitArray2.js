// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.6: InitArray2.js
// Inicialización de arreglos con listas de inicializadores.
function start()
{
   // La lista de inicializadores especifica el número de elementos y
   // un valor para cada elemento.
   var colors = new Array( "cian", "magenta", "amarillo", "negro" ); 
   var integers1 = [ 2, 4, 6, 8 ];                                
   var integers2 = [ 2, , , 8 ];                                  

   outputArray( "El arreglo colors contiene", colors, 
      document.getElementById( "output1" ) );
   outputArray( "El arreglo integers1 contiene", integers1, 
      document.getElementById( "output2" ) );
   outputArray( "El arreglo integers2 contiene", integers2, 
      document.getElementById( "output3" ) );
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
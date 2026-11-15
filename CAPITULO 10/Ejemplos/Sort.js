// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.16: Sort.js
// Ordenamiento de un arreglo con sort.
function start()
{
   var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

   outputArray( "Elementos de datos en orden original: ", a,
      document.getElementById( "originalArray" ) ); 
   a.sort( compareIntegers );  // ordena el arreglo
   outputArray( "Elementos de datos en orden ascendente: ", a,
      document.getElementById( "sortedArray" ) ); 
} // cierre de la función start

// muestra el encabezado seguido del contenido de theArray
function outputArray( heading, theArray, output )
{
   output.innerHTML = heading + theArray.join( " " ); 
} // cierre de la función outputArray

// función de comparación para usar con sort
function compareIntegers( value1, value2 )         
{                                                 
   return parseInt( value1 ) - parseInt( value2 );
} // cierre de la función compareIntegers                         

window.addEventListener( "load", start, false );
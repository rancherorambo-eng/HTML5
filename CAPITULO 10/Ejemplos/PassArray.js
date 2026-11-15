// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.14: PassArray.js 
// Paso de arreglos y elementos individuales de arreglos a funciones. 
function start()
{
   var a = [ 1, 2, 3, 4, 5 ];
   
   // paso del arreglo completo
   outputArray( "Arreglo original: ", a, 
      document.getElementById( "originalArray" ) );
   modifyArray( a );  // el arreglo a se pasa por referencia
   outputArray( "Arreglo modificado: ", a, 
      document.getElementById( "modifiedArray" ) );

   // paso de un elemento individual del arreglo
   document.getElementById( "originalElement" ).innerHTML =
      "a[3] antes de modifyElement: " + a[ 3 ];
   modifyElement( a[ 3 ] ); // el elemento a[3] del arreglo se pasa por valor
   document.getElementById( "modifiedElement" ).innerHTML =
      "a[3] después de modifyElement: " + a[ 3 ];
} // cierre de la función start()

// muestra el encabezado seguido del contenido de "elArreglo"
function outputArray( heading, theArray, output )
{
   output.innerHTML = heading + theArray.join( " " );    
} // cierre de la función outputArray

// función que modifica los elementos de un arreglo
function modifyArray( theArray )
{
   for ( var j in theArray )
   {
      theArray[ j ] *= 2;    
   } // fin de for
} // cierre de la función modifyArray

// función que modifica el valor pasado   
function modifyElement( e )
{
   e *= 2; // escala el elemento e solo durante la ejecución de la función
   document.getElementById( "inModifyElement" ).innerHTML = 
      "Valor en modifyElement: " + e;
} // cierre de la función modifyElement   

window.addEventListener( "load", start, false );
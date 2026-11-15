// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.18: search.js 
// Busca en un arreglo con indexOf. 
var a = new Array( 100 );  // crea un arreglo

// llena el arreglo con valores enteros pares de 0 a 198
for ( var i = 0; i < a.length; ++i ) 
{
   a[ i ] = 2 * i;                   
} // fin de for

// función que se llama cuando se presiona el botón "Buscar"
function buttonPressed()
{
   // obtiene el campo de texto de entrada
   var inputVal = document.getElementById( "inputVal" );

   // obtiene el párrafo de resultado
   var result = document.getElementById( "result" );

   // obtiene la clave de búsqueda del campo de texto de entrada y realiza la búsqueda
   var searchKey = parseInt( inputVal.value );
   var element = a.indexOf( searchKey );

   if ( element != -1 )
   {
      result.innerHTML = "Se encontró el valor en el elemento " + element;
   } // fin de if
   else
   {
      result.innerHTML = "Valor no encontrado";
   } // fin de else
} // cierre de la función buttonPressed

// registra el manejador del evento de clic para searchButton
function start()
{
   var searchButton = document.getElementById( "searchButton" );
   searchButton.addEventListener( "click", buttonPressed, false );
} // cierre de la función start

window.addEventListener( "load", start, false );
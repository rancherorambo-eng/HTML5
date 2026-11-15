// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 11.7: SearchingStrings.js 
// Búsqueda en cadenas con indexOf y lastIndexOf.
var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed() 
{
   var inputField = document.getElementById( "inputField" );

   document.getElementById( "results" ).innerHTML =
      "<p>La primera aparición se encuentra en el índice " + 
         letters.indexOf( inputField.value ) + "</p>" +   
      "<p>La última aparición se encuentra en el índice " + 
         letters.lastIndexOf( inputField.value ) + "</p>" +      
      "<p>La primera aparición desde el índice 12 se encuentra en el índice " +
         letters.indexOf( inputField.value, 12 ) + "</p>" +     
      "<p>La última aparición desde el índice 12 se encuentra en el índice " +
         letters.lastIndexOf( inputField.value, 12 ) + "</p>";
} // cierre de la función buttonPressed

// registra el manejador del evento de clic para searchButton
function start()
{
   var searchButton = document.getElementById( "searchButton" );
   searchButton.addEventListener( "click", buttonPressed, false );
} // cierre de la función start

window.addEventListener( "load", start, false );
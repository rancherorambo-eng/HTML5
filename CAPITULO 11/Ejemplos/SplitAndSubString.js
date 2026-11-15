// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 11.9: SplitAndSubString.js
// Métodos split y substring del objeto String.
function splitButtonPressed()  
{  
   var inputString = document.getElementById( "inputField" ).value;
   var tokens = inputString.split( " " ); 
   
   var results = document.getElementById( "results" );
   results.innerHTML = "<p>La oración dividida en palabras es: </p>" + 
      "<p class = 'indent'>" + 
      tokens.join( "</p><p class = 'indent'>" ) + "</p>" + 
      "<p>Los primeros 10 caracteres de la cadena de entrada son: </p>" + 
      "<p class = 'indent'>'" + inputString.substring( 0, 10 ) + "'</p>";
} // cierre de la función splitButtonPressed

// registra el manejador del evento de clic para splitButton
function start()
{
   var splitButton = document.getElementById( "splitButton" );
   splitButton.addEventListener( "click", splitButtonPressed, false );
} // cierre de la función start

window.addEventListener( "load", start, false );
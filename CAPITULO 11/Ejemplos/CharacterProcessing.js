// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 11.5: CharacterProcessing.js 
// Métodos de cadenas charAt, charCodeAt, fromCharCode, 
// toLowerCase y toUpperCase.
function start()
{
   var s = "ZEBRA";
   var s2 = "AbCdEfG";
   var result = "";
   
   result = "<p>El carácter en el índice 0 en '" + s + "' es " + 
      s.charAt( 0 ) + "</p>";
   result += "<p>El código de carácter en el índice 0 en '" + s + "' es " + 
      s.charCodeAt( 0 ) + "</p>";   
      
   result += "<p>'" + String.fromCharCode( 87, 79, 82, 68 ) + 
      "' contiene los códigos de caracteres 87, 79, 82 y 68</p>";
      
   result += "<p>'" + s2 + "' en minúsculas es '" + 
      s2.toLowerCase() + "'</p>";  
   result += "<p>'" + s2 + "' en mayúsculas es '" + 
      s2.toUpperCase() + "'</p>";    
   
   document.getElementById( "results" ).innerHTML = result;
} // cierre de la función start

window.addEventListener( "load", start, false );
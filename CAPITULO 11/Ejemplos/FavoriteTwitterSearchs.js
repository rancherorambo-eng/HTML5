// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 11.19: FavoriteTwitterSearchs.js
// Almacenamiento y recuperación de pares clave-valor usando 
// localStorage y sessionStorage de HTML5
var tags; // arreglo de etiquetas para las consultas

// carga las búsquedas guardadas previamente y las muestra en la página
function loadSearches() 
{
   if ( !window.sessionStorage.getItem( "herePreviously" ) )
   {
      sessionStorage.setItem( "herePreviously", "true" );
      document.getElementById( "welcomeMessage" ).innerHTML = 
         "Bienvenido a la aplicación de búsquedas favoritas de Twitter";
   } // fin de if

   var length = localStorage.length; // número de pares clave-valor
   tags = []; // crea un arreglo vacío

   // carga todas las claves
   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } // fin de for

   tags.sort(); // ordena las claves

   var markup = "<ul>"; // se usa para almacenar el marcado de los enlaces de búsqueda
   var url = "http://search.twitter.com/search?q=";

   // construye la lista de enlaces
   for (var tag in tags) 
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Editar' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Eliminar' onclick = 'deleteTag(id)'>";
   } // fin de for

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
} // cierre de la función loadSearches

// elimina todos los pares clave-valor de localStorage
function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); // recarga las búsquedas
} // cierre de la función clearAllSearches

// guarda una búsqueda recién etiquetada en localStorage
function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; // limpia la entrada de la etiqueta
   query.value = ""; // limpia la entrada de la consulta
   loadSearches(); // recarga las búsquedas
} // cierre de la función saveSearch

// elimina un par clave-valor específico de localStorage
function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); // recarga las búsquedas
} // cierre de la función deleteTag

// muestra la consulta etiquetada existente para su edición
function editTag( tag )
{
   document.getElementById("query").value = localStorage[ tag ];
   document.getElementById("tag").value = tag;    
   loadSearches(); // recarga las búsquedas
} // cierre de la función editTag

// registra los manejadores de eventos y luego carga las búsquedas
function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); // carga las búsquedas guardadas previamente
} // cierre de la función start

window.addEventListener( "load", start, false );
// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.10: RollDice.js
// Resume las frecuencias de lanzamiento de dados con un arreglo en lugar de switch
var frequency = [ , 0, 0, 0, 0, 0, 0 ]; // frequency[0] no inicializado
var totalDice = 0;
var dieImages = new Array(12); // arreglo para almacenar los elementos img

// obtiene los elementos img de los dados
function start()
{
   var button = document.getElementById( "rollButton" );
   button.addEventListener( "click", rollDice, false );
   var length = dieImages.length; // obtiene la longitud del arreglo una vez antes del ciclo

   for ( var i = 0; i < length; ++i )
   {
      dieImages[ i ] = document.getElementById( "die" + (i + 1) );
   } // fin de for
} // cierre de la función start

// lanza los dados
function rollDice()
{
   var face;  // cara obtenida
   var length = dieImages.length;

   for ( var i = 0; i < length; ++i )
   {
      face = Math.floor( 1 + Math.random() * 6 );
      tallyRolls( face ); // incrementa un contador de frecuencia
      setImage( i, face ); // muestra la imagen del dado correspondiente
      ++totalDice; // incrementa el total 
   } // fin de for

   updateFrequencyTable();
} // cierre de la función rollDice

// incrementa el contador de frecuencia correspondiente
function tallyRolls( face )
{
   ++frequency[ face ]; // incrementa el contador correspondiente                     
} // cierre de la función tallyRolls

// establece la fuente de la imagen para un dado (Actualizado con la carpeta y nombre en español)
function setImage( dieNumber, face )
{
   dieImages[ dieNumber ].setAttribute( "src", "../Imagenes/dado" + face + ".png" );
   dieImages[ dieNumber ].setAttribute( "alt", 
      "dado con " + face + " punto(s)" );
} // cierre de la función setImage

// actualiza la tabla de frecuencias en la página
function updateFrequencyTable()
{
   var results = "<table><caption>Frecuencias de lanzamiento de dados</caption>" +
      "<thead><th>Cara</th><th>Frecuencia</th>" + 
      "<th>Porcentaje</th></thead><tbody>";
   var length = frequency.length;

   // crea las filas de la tabla para las frecuencias
   for ( var i = 1; i < length; ++i )
   {
      results += "<tr><td>" + i + "</td><td>" + frequency[ i ] + "</td><td>" + 
         formatPercent(frequency[ i ] / totalDice) + "</td></tr>";
   } // fin de for

   results += "</tbody></table>";
   document.getElementById( "frequencyTableDiv" ).innerHTML = results;
} // cierre de la función updateFrequencyTable

// formatea el porcentaje
function formatPercent( value )
{
   value *= 100;
   return value.toFixed(2);
} // cierre de la función formatPercent

window.addEventListener( "load", start, false );
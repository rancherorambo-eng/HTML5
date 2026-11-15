// Ajustes menores de presentación; se conserva la lógica del ejemplo.
// Fig. 10.12: RandomPicture2.js
// Selección aleatoria de imágenes usando arreglos
var iconImg; 
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];
var descriptions = [ "Error común de programación", 
   "Consejo para la prevención de errores", "Buena práctica de programación", 
   "Observación de apariencia y estilo (Look-and-Feel)", "Consejo de rendimiento", "Consejo de portabilidad", 
   "Observación de ingeniería de software" ];

// Elige una imagen aleatoria y su descripción correspondiente, luego modifica
// el elemento img en el cuerpo del documento 
function pickImage()
{
   var index = Math.floor( Math.random() * 7 );
   // Se incluye "Imagenes/" para que cargue correctamente los archivos de la carpeta
   iconImg.setAttribute( "src", "../Imagenes/" + pictures[ index ] + ".png" );
   iconImg.setAttribute( "alt", descriptions[ index ] );
} // cierre de la función pickImage

// Registra el manejador de eventos de clic para iconImg
function start()
{
   iconImg = document.getElementById( "image" );
   iconImg.addEventListener( "click", pickImage, false );
} // cierre de la función start

window.addEventListener( "load", start, false );
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Seoul that used to be so unusually sparkling", time: 1 },
  { text: "was a new world to me", time: 4 },
  { text: "i met you when you were clammy with sweat", time: 8 },
  { text: "a sinewhat strange kid", time: 9 },
  { text: "A child who was strange about something", time: 11 },
  { text: "I'm from the moon", time: 12 },
  { text: "you're from the stars", time:  14 },
  { text: "Our conversation felt like homework", time: 16 },
  { text: "friends on one day", time: 17 },
  { text: "Enemies on another", time: 19 },
  { text: "I just wanna understand", time: 20 },
  { text: "hello, my alien", time:  22 },
  { text: "we are each others mystery", time: 25 },
  { text: "yeah,yeah", time: 26 },
  { text: "is that why its even more special", time: 29 },
  { text: "oh", time: 30 },
  { text: "one day when this joy is over", time: 32 },
  { text: "stay!", time: 33 },
  { text: "hey", time:  34 },
  { text: "stay by my side", time: 36 },
  { text: "for eternity,keep staying here", time: 38 },
  { text: "stay", time: 39 },
  { text: "hey", time: 40 },
  { text: "promise it with your little finger", time: 42  },
  { text: "seven long summers", time: 43 },
  { text: "and cold winters", time: 44 },
  { text: "made numerous promises and memories", time: 46 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
// Script para funcionalidades

// Galería Dinámica e Interactiva 

// Acceder a los elementos con la clase "photo" (cada miniatura)
const botonImg = document.getElementsByClassName("photo");
// Acceder a la imagen hero (etiqueta <img> interior)
const heroImg = document.querySelector("#img-galeria img");

// Recorrer el array de elementos y aplicar el escuchador de eventos
for (let i = 0; i < botonImg.length; i++) {
    // Escuchador de eventos al hacer clic en cada miniatura
    botonImg[i].addEventListener("click", () => {
        // Obtenemos la ruta en alta resolución
        const rutaActual = botonImg[i].getAttribute("src");
        const rutaHD = rutaActual.replace(".webp", "-large.webp");

        // Transición suave: desvanecer imagen actual
        heroImg.style.opacity = "0";

        // Tras el fundido, actualizar ruta y volver a mostrar suavemente
        setTimeout(() => {
            heroImg.src = rutaHD;
            heroImg.alt = botonImg[i].alt;
            heroImg.style.opacity = "1";
        }, 300);
    });
}

// Funcionalidad para el Video Reel
// Elementos del DOM para el modal y el vídeo
const btnReel = document.getElementById("reel");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const video = document.getElementById("video");

// Al pulsar el botón, se abre la ventana modal y se reproduce el vídeo
btnReel.addEventListener("click", () => {
    modal.style.display = "flex";
    video.play();
});

// Función para cerrar ventana modal y pausar el vídeo
function cerrarModal() {
    modal.style.display = "none";
    video.pause();
}

// Cerrar modal al pulsar la cruz de cierre
closeModal.addEventListener("click", cerrarModal);

// Cerrar modal al hacer clic en el fondo oscuro exterior
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        cerrarModal();
    }
});

// Nuevo Reproductor de Audio
const btnAudio = document.getElementById("btn-audio");
const ambientAudio = document.getElementById("ambient-audio");

// Escuchador para alternar reproducción y pausa
btnAudio.addEventListener("click", () => {
    if (ambientAudio.paused) {
        ambientAudio.play();
        btnAudio.textContent = "Pausar ambiente espacial";
    } else {
        ambientAudio.pause();
        btnAudio.textContent = "Escuchar ambiente espacial";
    }
});

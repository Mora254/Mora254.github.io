// Array de textos que se cambiarán
const announcements = [
    
    
    { text: "¡Vacaciones!"},
    { text: "¡Inscripciones para el nuevo ciclo escolar 19 de agosto!"},
    { text: "¡26 de agosto inicio del ciclo escolar 2024-2025!" },

];

// Selecciona el elemento que contendrá el texto
const announcementText = document.getElementById("announcement-text");

// Índice actual del array de textos
let currentIndex = 0;

// Función que cambia el texto según la flecha clickeada
function changeAnnouncement(next) {
    if (next) {
        currentIndex = (currentIndex + 1) % announcements.length;
    } else {
        currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
    }

    // Cambia el texto
    announcementText.textContent = announcements[currentIndex].text;
}

// Muestra el primer texto
announcementText.textContent = announcements[currentIndex].text;

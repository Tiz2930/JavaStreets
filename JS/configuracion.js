

// configuracion.js

document.addEventListener("DOMContentLoaded", function () {
    const botonGuardar = document.querySelector(".guardar-config");
  
    botonGuardar.addEventListener("click", function () {
      alert("Cambios guardados con éxito");
      window.location.href = "/HTML/comunidad.html"; // Cambiá si tu ruta es distinta
    });
  });
  

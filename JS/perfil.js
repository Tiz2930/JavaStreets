// =======================
// FUNCIONES DE PERFIL
// =======================

// Guardar perfil en localStorage
function perfilGuardado() {
    const nombre = document.getElementById("nombre").value;
    const presentacion = document.getElementById("presentacion").value;
    const genero = document.getElementById("genero").value;

    localStorage.setItem("perfil_nombre", nombre);
    localStorage.setItem("perfil_presentacion", presentacion);
    localStorage.setItem("perfil_genero", genero);

    // 🔹 ACTUALIZAR MENÚ USUARIO AL INSTANTE
    const nombreMenu = document.querySelector("#nombreMenu");
    if (nombreMenu) {
        nombreMenu.textContent = nombre;
    }

    const fotoMenu = document.querySelector("#fotoMenu");
    const foto = localStorage.getItem("perfil_foto");
    if (fotoMenu && foto) {
        fotoMenu.src = foto;
    }

    alert("Perfil guardado correctamente ✅");
}

// Cambiar foto de perfil
function cambiarFotoPerfil(archivo) {
    const lector = new FileReader();
    lector.onload = function (e) {
        localStorage.setItem("perfil_foto", e.target.result);
        document.querySelector(".avatar-container img").src = e.target.result;
    };
    lector.readAsDataURL(archivo);
}

// =======================
// CARGAR DATOS AL INICIAR
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("perfil_nombre");
    const presentacion = localStorage.getItem("perfil_presentacion");
    const genero = localStorage.getItem("perfil_genero");
    const foto = localStorage.getItem("perfil_foto");

    if (nombre) document.getElementById("nombre").value = nombre;
    if (presentacion) document.getElementById("presentacion").value = presentacion;
    if (genero) document.getElementById("genero").value = genero;
    if (foto) document.querySelector(".avatar-container img").src = foto;
});

// =======================
// INPUT PARA SUBIR FOTO
// =======================

// Crear input invisible para seleccionar foto
const inputFoto = document.createElement("input");
inputFoto.type = "file";
inputFoto.accept = "image/*";
inputFoto.style.display = "none";
document.body.appendChild(inputFoto);

// Evento cuando se selecciona la foto
inputFoto.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        cambiarFotoPerfil(this.files[0]);
    }
});

// Cuando se hace click en "Cambiar foto" o en el ícono 📷
document.querySelector(".foto-perfil button").addEventListener("click", () => inputFoto.click());
document.querySelector(".overlay").addEventListener("click", () => inputFoto.click());

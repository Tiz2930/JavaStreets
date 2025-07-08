// Detectar el clic en "Salir"
document.addEventListener("DOMContentLoaded", () => {
    const btnSalir = document.getElementById("btnSalir");
    if (btnSalir) {
        btnSalir.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que se recargue
            cerrarSesion();
        });
    }
});

// Función que cierra sesión y redirige
function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/HTML/login.html"; // O "login.html" si usás login
}

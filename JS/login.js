function iniciarSesion() {
  const nombre = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!nombre || !password) {
    alert('Por favor, completá todos los campos.');
    return;
  }

  // Simulación de contraseña básica
  if (password === '1234') {
    localStorage.setItem('usuario', nombre);
    window.location.href = 'home.html';
  } else {
    alert('Contraseña incorrecta.');
  }
}

window.onload = function () {
  const mensajeDiv = document.getElementById("mensajeSesion");

  if (localStorage.getItem("cerrarSesion") === "true") {
    mensajeDiv.textContent = "🔒 Sesión cerrada correctamente.";
    mensajeDiv.style.display = "block";
    localStorage.removeItem("cerrarSesion");
  }

  const btnEntrar = document.getElementById("btnEntrar");
  if (btnEntrar) {
    btnEntrar.addEventListener("click", iniciarSesion);
    e.preventDefault();
  }
};

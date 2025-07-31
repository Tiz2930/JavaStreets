function iniciarSesion() {
  const nombre = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!nombre || !password) {
    configComplete();
    return;
  }

  // Simulación de contraseña básica
  if (password === '1234') {
    localStorage.setItem('usuario', nombre);
    window.location.href = 'home.html';
  } else {
    configIncorrecta();
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

function configIncorrecta() {
  Swal.fire({
    title: "Contraseña incorrecta",
    icon: "error",
    timer: 1500,
    showConfirmButton: false
  });
};


function configComplete() {
  Swal.fire({
    title: "Porfavor, complete todos los campos",
    icon: "warning",
    timer: 1500,
    showConfirmButton: false
  });
};
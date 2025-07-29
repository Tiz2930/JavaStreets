//Registro

// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const btnRegistrar = document.getElementById('btnRegistrar');

  if (btnRegistrar) {
    btnRegistrar.addEventListener('click', function (e) {
      e.preventDefault();
      registrarUsuario();
    });
  }
});

// Función para registrar usuario
function registrarUsuario() {
  const nombre = document.getElementById('usuario').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!nombre || !email || !password || !confirmPassword) {
    mostrarAlertaCamposIncompletos();
    return;
  }

  if (password !== confirmPassword) {
    mostrarAlertaPasswordsNoCoinciden();
    return;
  }

  // Guardar en localStorage (⚠️ solo para pruebas)
  localStorage.setItem('usuarioRegistrado', nombre);
  localStorage.setItem('emailRegistrado', email);
  localStorage.setItem('passwordRegistrado', password); // ⚠️ Nunca guardar contraseñas así en producción

  // Mostrar éxito
  Swal.fire({
    title: "✅ Registro exitoso",
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  }).then(() => {
    window.location.href = 'home.html';
  });
}

// Alerta: campos vacíos
function mostrarAlertaCamposIncompletos() {
  Swal.fire({
    title: "Por favor, complete todos los campos",
    icon: "warning",
    timer: 1500,
    showConfirmButton: false
  });
}

// Alerta: contraseñas no coinciden
function mostrarAlertaPasswordsNoCoinciden() {
  Swal.fire({
    title: "Las contraseñas no coinciden",
    icon: "error",
    timer: 1500,
    showConfirmButton: false
  });
}



//Login 

function iniciarSesion() {
  const nombre = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!nombre || !password) {
    configComplete();
    return;
  }

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
    btnEntrar.addEventListener("click", (e) => {
      e.preventDefault();
      iniciarSesion();
    });
  }
};

function configIncorrecta() {
  Swal.fire({
    title: "Contraseña incorrecta",
    icon: "error",
    timer: 1500,
    showConfirmButton: false
  });
}

function configComplete() {
  Swal.fire({
    title: "Por favor, complete todos los campos",
    icon: "warning",
    timer: 1500,
    showConfirmButton: false
  });
}

//Salir

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
  console.log("Cerrando sesión...");
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/html/home-out.html";
}

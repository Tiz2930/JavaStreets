function registrarUsuario() {
  const nombre = document.getElementById('usuario').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!nombre || !email || !password || !confirmPassword) {
    configComplete();
    return;
  }

  if (password !== confirmPassword) {
    configNoCoinciden();
    return;
  }

  // Simula guardado en localStorage (solo para testing, NO para producción)
  localStorage.setItem('usuarioRegistrado', nombre);
  localStorage.setItem('emailRegistrado', email);
  localStorage.setItem('passwordRegistrado', password); // ⚠️ Solo para pruebas

  Swal.fire({
    title: "✅ Registro exitoso",
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  }).then(() => {
    window.location.href = 'home.html';
  });
}

window.onload = function () {
  const btnRegistrar = document.getElementById("btnRegistrar");
  if (btnRegistrar) {
    btnRegistrar.addEventListener("click", function (e) {
      e.preventDefault();
      registrarUsuario();
    });
  }
};

function configComplete() {
  Swal.fire({
    title: "Por favor, complete todos los campos",
    icon: "warning",
    timer: 1500,
    showConfirmButton: false
  });
}

function configNoCoinciden() {
  Swal.fire({
    title: "Las contraseñas no coinciden",
    icon: "error",
    timer: 1500,
    showConfirmButton: false
  });
}

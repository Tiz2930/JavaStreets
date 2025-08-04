window.addEventListener("DOMContentLoaded", function () {
  let subMenu = document.getElementById("subMenu");
  let notiMenu = document.getElementById("notiMenu");

  function usuarioMenu() {
    subMenu.classList.toggle("open-menu");
    notiMenu.classList.remove("open-menu");
  }

  function toggleNotificaciones() {
    notiMenu.classList.toggle("open-menu");
    subMenu.classList.remove("open-menu");
  }

  document.addEventListener("click", function (e) {
    const isClickInsideSubMenu = subMenu.contains(e.target);
    const isClickInsideNotiMenu = notiMenu.contains(e.target);
    const isClickOnUserIcon = e.target.closest(".user");
    const isClickOnNotiIcon = e.target.closest(".notificacion");

    if (!isClickInsideSubMenu && !isClickOnUserIcon) {
      subMenu.classList.remove("open-menu");
    }

    if (!isClickInsideNotiMenu && !isClickOnNotiIcon) {
      notiMenu.classList.remove("open-menu");
    }
  });

  // Redirige si no hay sesión
  const usuario = localStorage.getItem("usuario");
  if (!usuario) {
    window.location.href = "/HTML/login.html";
    return;
  }

  // Mostrar el nombre del usuario
  const nombreElemento = document.querySelector(".user-info h1");
  if (nombreElemento) {
    nombreElemento.textContent = usuario;
  }

  // Activar botón de cerrar sesión
  const btnLogout = document.querySelector(".loguot");
  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarSesion();
    });
  }

  // ✅ Exponer funciones globales (¡esto debe ir acá adentro!)
  window.usuarioMenu = usuarioMenu;
  window.toggleNotificaciones = toggleNotificaciones;
  window.cerrarSesion = cerrarSesion;
});

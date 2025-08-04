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

  function cerrarSesion() {
      localStorage.removeItem("usuario");
      localStorage.removeItem("perfil_nombre");
      localStorage.removeItem("perfil_foto");
      localStorage.setItem("cerrarSesion", "true");
      window.location.href = "/HTML/login.html";
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

  // Mostrar nombre y foto desde perfil guardado
  const nombrePerfil = localStorage.getItem("perfil_nombre");
  const fotoPerfil = localStorage.getItem("perfil_foto");

  const nombreMenu = document.querySelector("#nombreMenu");
  const fotoMenu = document.querySelector("#fotoMenu");

  if (nombreMenu) nombreMenu.textContent = nombrePerfil || usuario;
  if (fotoMenu && fotoPerfil) fotoMenu.src = fotoPerfil;

  // Botón de cerrar sesión
  const btnLogout = document.querySelector(".loguot");
  if (btnLogout) {
      btnLogout.addEventListener("click", (e) => {
          e.preventDefault();
          cerrarSesion();
      });
  }

  // Hacer accesibles las funciones al global
  window.usuarioMenu = usuarioMenu;
  window.toggleNotificaciones = toggleNotificaciones;
  window.cerrarSesion = cerrarSesion;
});
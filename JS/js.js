let subMenu = document.getElementById("subMenu")
let notiMenu = document.getElementById("notiMenu")

  // Menú usuario
  function usuarioMenu() {
    document.getElementById("subMenu").classList.toggle("open-menu");
    document.getElementById("notiMenu").classList.remove("open-menu");
  }

  // Menú notificaciones
  function toggleNotificaciones() {
    document.getElementById("notiMenu").classList.toggle("open-menu");
    document.getElementById("subMenu").classList.remove("open-menu");
  }

  // Cierre automático al hacer clic fuera
  document.addEventListener("click", function (e) {
    const subMenu = document.getElementById("subMenu");
    const notiMenu = document.getElementById("notiMenu");

    const isClickInsideSubMenu = subMenu.contains(e.target);
    const isClickInsideNotiMenu = notiMenu.contains(e.target);
    const isClickOnUserIcon = e.target.closest(".user");
    const isClickOnNotiIcon = e.target.closest(".notificacion");

    // Si el clic NO es dentro del subMenu ni sobre el ícono, lo cerramos
    if (!isClickInsideSubMenu && !isClickOnUserIcon) {
      subMenu.classList.remove("open-menu");
    }

    // Lo mismo con notificaciones
    if (!isClickInsideNotiMenu && !isClickOnNotiIcon) {
      notiMenu.classList.remove("open-menu");
    }
  });
window.addEventListener("DOMContentLoaded", () => {
    const userBtn = document.querySelector(".user");
    const notiBtn = document.querySelector(".notificacion");
  
    if (userBtn) {
      userBtn.addEventListener("click", (e) => {
        e.preventDefault();
        usuarioMenu();
      });
    }
  
    if (notiBtn) {
      notiBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleNotificaciones();
      });
    }
  });
  
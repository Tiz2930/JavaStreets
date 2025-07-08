document.addEventListener("DOMContentLoaded", () => {
    const carritoContainer = document.getElementById("carrito-container");
    let carrito = JSON.parse(localStorage.getItem("carritoEntradas")) || [];
  
    if (carrito.length === 0) {
      carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
      return;
    }
  
    carritoContainer.innerHTML = carrito.map(evento => `
      <div class="item-carrito">
        <h3>${evento.titulo}</h3>
        <img src="${evento.imagen}" alt="${evento.titulo}" style="max-width: 200px;" />
        <p>${evento.descripcion}</p>
      </div>
    `).join('');
  });

  function finalizarCompra() {
    const carrito = JSON.parse(localStorage.getItem("carritoEntradas")) || [];
  
    if (carrito.length === 0) {
      alert("No hay entradas en el carrito.");
      return;
    }
  
    alert("¡Gracias por tu compra! 🎉 Te redirigimos al inicio...");
    localStorage.removeItem("carritoEntradas"); // Vaciamos el carrito
  
    // Esperamos un segundo y redirigimos al home
    setTimeout(() => {
      window.location.href = "/HTML/home.html";
    }, 1500); // 1.5 segundos para que vea el alert
  }
  
  
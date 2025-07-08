document.addEventListener("DOMContentLoaded", () => {
    const eventoJSON = localStorage.getItem("eventoSeleccionado");
    if (eventoJSON) {
      const evento = JSON.parse(eventoJSON);
  
      const contenedor = document.getElementById("detalle-evento");
      contenedor.innerHTML = `
  <h2>${evento.titulo}</h2>
  <img src="${evento.imagen}" alt="${evento.titulo}" />
  <p>${evento.descripcion}</p>
  <button class="btn-comprar" onclick="comprarTicket()">Comprar Entrada</button>
`;
    }
  });
  
  function comprarTicket() {
    const eventoJSON = localStorage.getItem("eventoSeleccionado");
    if (!eventoJSON) return;
  
    const evento = JSON.parse(eventoJSON);
    let carrito = JSON.parse(localStorage.getItem("carritoEntradas")) || [];
  
    // Buscar si ya existe el evento en el carrito
    const index = carrito.findIndex(e => e.titulo === evento.titulo);
    if (index !== -1) {
      // Si existe, aumentar cantidad
      carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
      // Sino, agregar con cantidad 1
      evento.cantidad = 1;
      carrito.push(evento);
    }
    localStorage.setItem("carritoEntradas", JSON.stringify(carrito));
    alert("Entrada agregada al carrito 🎫");
  }
  
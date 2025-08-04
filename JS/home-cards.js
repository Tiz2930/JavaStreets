// Carga los eventos
fetch("../data/eventos.json")
  .then((res) => res.json())
  .then((data) => {
    const contenedorEventos = document.getElementById("eventos-populares");
    const eventosAleatorios = data.sort(() => 0.5 - Math.random()).slice(0, 4);
    eventosAleatorios.forEach((evento) => {
      // a vacio
      const card = document.createElement("a");
      card.className = "cards-eventos";
      card.href = evento.link || "#";

      // Imagen del evento
      const img = document.createElement("img");
      img.src = evento.images[0];
      img.alt = evento.name;

      // Título
      const title = document.createElement("h2");
      title.textContent = evento.name;

      // Descripción
      const desc = document.createElement("p");
      desc.textContent = evento.description;
      desc.className = "event-desc";

      // Stock
      const stock = document.createElement("p");
      stock.textContent = `${evento.stock} Entradas`;
      stock.className = "stock";

      // Agregamos la imagen del usuario a userInfo

      // Meter todo en la card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(stock);

      // Agregar la card al contenedor
      contenedorEventos.appendChild(card);
    });
  });

fetch("../data/ecommerce.json")
  .then(res => res.json())
  .then(data => {
    const contenedorMerch = document.getElementById("merch-tendencia");
    const maxProductos = 4;
    const todosLosProductos = [];

    //Juntar todos los productos de todos los vendedores
    for (const vendedor of data) {
      for (const producto of vendedor.products) {
        todosLosProductos.push({
          ...producto,
          vendedor: vendedor.user
        });
      }
    }

    //Mezclar los productos aleatoriamente
    const productosAleatorios = todosLosProductos
      .sort(() => Math.random() - 0.5)
      .slice(0, maxProductos);

    //Crear las cards
    for (const producto of productosAleatorios) {
      // Link envuelve la card completa
      const card = document.createElement("a");
      card.className = "cards-eventos";
      card.href = producto.link || "#";

      // Imagen del producto
      const img = document.createElement("img");
      img.src = producto.pimage;
      img.alt = producto.name;

      // Nombre
      const title = document.createElement("h2");
      title.textContent = producto.name;

      // Precio
      const precio = document.createElement("p");
      precio.textContent = `${producto.price}$`;
      precio.className = "precio";

      // Vendedor
      const vendedorInfo = document.createElement("p");
      vendedorInfo.textContent = producto.vendedor;
      vendedorInfo.className = "vendedor";

      // Armar la card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(precio);
      card.appendChild(vendedorInfo);

      // Agregar al DOM
      contenedorMerch.appendChild(card);
    }
  });

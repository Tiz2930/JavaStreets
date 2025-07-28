// Carga los eventos
fetch("../data/eventos.json")
  .then((res) => res.json())
  .then((data) => {
    const contenedorEventos = document.getElementById("eventos-populares");
    data.slice(0, 4).forEach((evento) => {
      // Card vacía
      const card = document.createElement("div");
      card.className = "tarj";

      // Imagen del evento
      const img = document.createElement("img");
      img.src = evento.images[0];
      img.alt = evento.name;
      img.className = "event-img";

      // Título
      const title = document.createElement("h2");
      title.textContent = evento.name;

      // Descripción
      const desc = document.createElement("p");
      desc.textContent = evento.description;

      // Stock
      const stock = document.createElement("p");
      stock.textContent = `Entradas disponibles: ${evento.stock}`;

      // Info del organizador
      const userInfo = document.createElement("div");
      userInfo.className = "user-info";

      // Imagen del usuario (ojo aquí)
      const userImg = document.createElement("img");
      userImg.src = evento.userImage;
      userImg.alt = evento.user;
      userImg.className = "user-img";

      // Agregamos la imagen del usuario a userInfo
      userInfo.appendChild(userImg);

      // Meter todo en la card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(stock);
      card.appendChild(userInfo);

      // Agregar la card al contenedor
      contenedorEventos.appendChild(card);
    });
  });

fetch("../data/ecommerce.json")
  .then(res => res.json())
  .then(data => {
    const contenedorMerch = document.getElementById("merch-tendencia");
    const maxProductos = 4;
    let productosMostrados = 0; // debe ser let, no const

    for (const vendedor of data) {
      for (const producto of vendedor.products) {
        if (productosMostrados >= maxProductos) break;

        // Crear la card
        const card = document.createElement("div");
        card.className = "card";

        // Imagen del producto
        const img = document.createElement("img");
        img.src = producto.image || "/img/no-image.png";
        img.alt = producto.name;
        img.className = "merch-img";

        // Nombre del producto
        const title = document.createElement("h2");
        title.textContent = producto.name;

        // Precio
        const precio = document.createElement("p");
        precio.textContent = `${producto.price}$`;

        // Vendedor
        const vendedorInfo = document.createElement("p");
        vendedorInfo.textContent = `Vendido por: ${vendedor.user}`;

        // Meter todo en la card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(precio);
        card.appendChild(vendedorInfo);

        // Agregar la card al contenedor
        contenedorMerch.appendChild(card);

        productosMostrados++; //Actualizamos el contador
      }

      // Salir también del bucle de vendedores si ya llegamos al máximo
      if (productosMostrados >= maxProductos) break;
    }
  });


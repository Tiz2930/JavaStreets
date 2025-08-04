fetch("../data/publicidad.json")
    .then((res) => res.json())
    .then((data) => {
        const contenedorPublicidad = document.getElementById("publicidad");
        const publicidadAleatoria = data.sort(() => 0.5 - Math.random()).slice(0, 4);

        publicidadAleatoria.forEach((publicidad) => {
            // Crear contenedor de la tarjeta
            const cardPublicidad = document.createElement("a");
            cardPublicidad.className = "card-publicidad";
            cardPublicidad.href = publicidad.enlace || "#";

            // Crear imagen
            const imgPublicidad = document.createElement("img");
            imgPublicidad.src = publicidad.imagen;
            imgPublicidad.alt = publicidad.titulo;

            // Agregar imagen a la tarjeta
            cardPublicidad.appendChild(imgPublicidad);

            // Agregar tarjeta al contenedor
            contenedorPublicidad.appendChild(cardPublicidad);
        });
    })
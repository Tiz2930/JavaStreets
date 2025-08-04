//Cargar opiniones
fetch("../data/opiniones.json")
    .then((res) => res.json())
    .then((data) => {
        const contenidoOpiniones = document.getElementById("contenido");
        const maxOpiniones = 5;
        const opinionesArray = [];

        //Junto todas las opiniones
        for (const user of data) {
            for (const opinion of user.opiniones)
                opinionesArray.push({
                    evento: user.evento,
                    usuario: opinion.usuario,
                    imagen_usuario: opinion.imagen_usuario,
                    opinion: opinion.opinion,
                    calificacion: opinion.calificacion,
                    fecha: opinion.fecha
                })
        }

        //Mezclar las opiniones
        const opinionesAleatorias = opinionesArray
            .sort(() => Math.random() - 0.5)
            .slice(0, maxOpiniones);

        //Creamos las cards
        for (const opinion of opinionesAleatorias) {
            const card = document.createElement("div");
            card.className = "opinion";

            //Contendor para usuario e imagen
            const userInfo = document.createElement("div");
            userInfo.className = "user-info";

            // Nombre del evento
            const nombreEvento = document.createElement("h2");
            nombreEvento.textContent = opinion.evento;

            //Nombre de usuario
            const nameUsuario = document.createElement("h1");
            nameUsuario.textContent = opinion.usuario;

            //Imagen de usuario
            const img = document.createElement("img")
            img.src = opinion.imagen_usuario;
            img.alt = opinion.usuario

            //Opinion
            const textoOpinion = document.createElement("h3");
            textoOpinion.textContent = opinion.opinion;

            //Calificacion
            const calificacion = document.createElement("p");
            calificacion.textContent = `${opinion.calificacion} Estrellas`;
            calificacion.className = "calificacion";

            //Fecha
            const fecha = document.createElement("p");
            fecha.textContent = opinion.fecha;
            fecha.className = "fecha"

            //Agregar a la card
            userInfo.appendChild(img);
            userInfo.appendChild(nameUsuario);
            card.appendChild(userInfo);
            card.appendChild(nombreEvento);
            card.appendChild(textoOpinion);
            card.appendChild(calificacion);
            card.appendChild(fecha);

            //Agregar al DOM
            contenidoOpiniones.appendChild(card);
        }
    });

//Boton publicar

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnPublicar").addEventListener("click", (e) => {
        e.preventDefault(); // Para que no recargue la página al enviar el form

        const nombreEvento = document.getElementById("nombre-evento").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const estrellas = document.getElementById("estrellas").value.trim();

        if (nombreEvento && mensaje && estrellas) {
            opinionPublicada();
            document.getElementById("comunidad").reset();
        } else {
            Swal.fire({
                title: "Error",
                text: "Por favor completa todos los campos.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            document.getElementById("comunidad").reset();
        }
    });
});


// Alertas exitosas
function opinionPublicada() {
    Swal.fire({
        title: "Post publicado con éxito",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
};
fetch("../data/eventos.json")
    .then((response) => response.json())
    .then((data) => {

        const events = document.getElementById("boxEvents");

        data.forEach((evento, index) => {
            // Creamos contenedor de la card
            const card = document.createElement("div");
            card.className = "card";

            // Creamos el carrusel
            const carousel = document.createElement("div");
            carousel.className = "carousel";

            const img = document.createElement("img");
            img.src = evento.images[0];
            img.className = "carousel-img";
            img.dataset.index = 0;
      
            const btnPrev = document.createElement("button");
            btnPrev.textContent = "‹";
            btnPrev.className = "carousel-btn left";
            btnPrev.onclick = () => {
              let current = parseInt(img.dataset.index);
              current = (current - 1 + evento.images.length) % evento.images.length;
              img.src = evento.images[current];
              img.dataset.index = current;
            };
      
            const btnNext = document.createElement("button");
            btnNext.textContent = "›";
            btnNext.className = "carousel-btn right";
            btnNext.onclick = () => {
              let current = parseInt(img.dataset.index);
              current = (current + 1) % evento.images.length;
              img.src = evento.images[current];
              img.dataset.index = current;
            };
      
            carousel.appendChild(btnPrev);
            carousel.appendChild(img);
            carousel.appendChild(btnNext);
            card.appendChild(carousel);
      
            // Resto del contenido
            const title = document.createElement("h2");
            title.textContent = evento.name;
            title.className = "titleEvent";

            divImg = document.createElement("div");
            divImg.className = "divImg";

            const userImage = document.createElement("img");
            userImage.src = evento.userImage || "../img/user-placeholder.png";
            userImage.alt = `${evento.user} Image`;
            userImage.className = "userImage";

            
            const users = document.createElement("div");
            users.textContent = evento.user;
            users.className = "users";
      
            const desc = document.createElement("p");
            desc.textContent = evento.description;
            desc.className = "descriptionEvent";
      
            const stock = document.createElement("p");
            stock.textContent = "Tickets: " + evento.stock;

      
            card.appendChild(title);
            users.appendChild(userImage);
            card.appendChild(users);
            card.appendChild(desc);
            card.appendChild(stock);
            events.appendChild(card);
          });











        });



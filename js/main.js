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

            const divImg = document.createElement("div");
            divImg.className = "divImg";

            const userImage = document.createElement("img");
            userImage.src = evento.userImage || "https://placehold.co/600x400/png";
            userImage.alt = `${evento.user} Image`;
            userImage.className = "userImage";

            
            const users = document.createElement("div");
            users.textContent = evento.user;
            users.className = "users";
            
            const infoDiv = document.createElement("div");
            infoDiv.className = "infoDiv";
            
            const desc = document.createElement("p");
            desc.textContent = evento.description;
            desc.className = "descriptionEvent";
      
            const stock = document.createElement("p");
            stock.textContent = "Entradas a la venta: " + evento.stock;
            stock.className = "stockEvent";
      
            card.appendChild(title);
            divImg.appendChild(userImage);
            divImg.appendChild(users);
            card.appendChild(divImg);   
            infoDiv.appendChild(desc);
            infoDiv.appendChild(stock);
            card.appendChild(infoDiv);
            events.appendChild(card);
          });











        });



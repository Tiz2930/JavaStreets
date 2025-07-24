fetch("../data/ecommerce.json")
    .then((response) => response.json())
    .then((data) => {

        const contDiv = document.getElementById("boxEcommerce")

        data.forEach((usuario) => {

            //! DIV USER

            const userDiv = document.createElement("div");
            userDiv.className = "userCard";

            //* Header del usuario
            const header = document.createElement("div");
            header.className = "userHeader";


            const userImage = document.createElement("img");
            userImage.src = usuario.userImage || "https://placehold.co/600x400/png";
            userImage.alt = `${usuario.user} Image`;
            userImage.className = "userImage";

            const userName = document.createElement("h2");
            userName.textContent = usuario.user;

            header.appendChild(userImage);
            header.appendChild(userName);
            userDiv.appendChild(header);


            //? Productos 

            const newDiv = document.createElement("div");
            newDiv.className = "divScroll";

            const gridProducts = document.createElement("div");
            gridProducts.className = "gridFunction";

            usuario.products.forEach((product) => {


                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `

                <h3>${product.name}</h3>
                <img src="${product.image || "https://via.assets.so/game.jpg?w=205&h=205"}" alt="${product.name}">
                <p> USD $${product.price}</p>

                `;


                gridProducts.appendChild(card);
                newDiv.appendChild(gridProducts);
            });

            userDiv.appendChild(newDiv);
            contDiv.appendChild(userDiv);


            const carousel = newDiv

            let intervalo = null;
            let direction = 1;
            let scrollSpeed = 1;

            const start = () => {

                intervalo = setInterval(() => {
                    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
                        direction = -1;
                    }
            
                    if (carousel.scrollLeft <= 1 && direction === -1) {
                        direction = 1;
                    }
            
                    carousel.scrollLeft += scrollSpeed * direction;
                }, 16); // ~60fps


            }

            const stop = () => {

                clearInterval(intervalo);

            }

            carousel.addEventListener('mouseover', () => {
                stop(); // Detiene el movimiento al pasar el mouse
            });

            carousel.addEventListener('mouseout', () => {
                start(); // Reanuda el movimiento al quitar el mouse
            })

            start();
        });

        //!

    });


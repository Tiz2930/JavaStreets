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
                card.className = "cardEcommerce";

                card.innerHTML = `

                <h3>${product.name}</h3>
                <img src="${product.pimage || "https://via.assets.so/game.jpg?w=205&h=205"}" alt="${product.name}">
                <p> USD $${product.price}</p>
                <button class="btnMore" data-id="${product.id}">Ver más</button>

                `;

                document.addEventListener("click", function (e) {
                    if (e.target.classList.contains("btnMore")) {
                        const id = e.target.dataset.id;
                        localStorage.setItem("selectedProductId", id);
                        window.location.href = "/html/productos-ecommerce.html";
                    }
                }
                );


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

        const searchInput = document.getElementById("searchInput");
        const priceFilter = document.getElementById("priceFilter");
        const principalDiv = document.querySelector(".principalDiv");


        let allProducts = [];

        // Cargar JSON y guardar todos los productos en una sola lista
        fetch("../data/ecommerce.json")
            .then((response) => response.json())
            .then((data) => {
                data.forEach(usuario => {
                    usuario.products.forEach(product => {
                        allProducts.push({
                            ...product,
                            user: usuario.user,
                            userImage: usuario.userImage
                        });
                    });
                });
            });

        // Función para renderizar las cards
        function renderCards(products) {
            principalDiv.innerHTML = ""; // Limpiar contenido
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "cardEcommerce";
                card.setAttribute("data-id", product.id);

                card.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${Array.isArray(product.image) ? product.image[0] : product.image}" alt="${product.name}" />
                    <p>USD $${product.price}</p>
                    <span class="seller">Vendedor: ${product.user}</span>
                `;

                // Agregar redirección al hacer clic
                card.addEventListener("click", () => {
                    localStorage.setItem("selectedProductId", product.id);
                    window.location.href = "../html/productos-ecommerce.html";
                });

                principalDiv.appendChild(card);
            });
        }

        // Filtro combinado
        function filterProducts() {
            const search = searchInput.value.toLowerCase();
            const priceOrder = priceFilter.value;

            let filtered = allProducts.filter(p =>
                p.name.toLowerCase().includes(search) ||
                p.user.toLowerCase().includes(search)
            );

            if (priceOrder === "asc") {
                filtered.sort((a, b) => a.price - b.price);
            } else if (priceOrder === "desc") {
                filtered.sort((a, b) => b.price - a.price);
            }

            renderCards(filtered);
        }

        // Eventos
        searchInput.addEventListener("input", filterProducts);
        priceFilter.addEventListener("change", filterProducts);




        const resetBtn = document.getElementById("resetBtn");

        resetBtn.addEventListener("click", () => {
            const principalDiv = document.querySelector(".principalDiv");
            principalDiv.innerHTML = ""; // Limpiamos resultados de búsqueda

            // Volvemos a cargar el JSON original y renderizamos como al principio
            fetch("../data/ecommerce.json")
                .then((response) => response.json())
                .then((data) => {
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
                            card.className = "cardEcommerce";
                            card.dataset.id = product.id;

                            card.innerHTML = `
                        <h3>${product.name}</h3>
                        <img src="${Array.isArray(product.image) ? product.image[0] : product.image}" alt="${product.name}">
                        <p> USD $${product.price}</p>
                    `;

                            gridProducts.appendChild(card);
                        });

                        newDiv.appendChild(gridProducts);
                        userDiv.appendChild(newDiv);
                        principalDiv.appendChild(userDiv);

                        // Reestablecer carrusel automático si lo usás:
                        const carousel = newDiv;
                        let intervalo = null;
                        let direction = 1;
                        let scrollSpeed = 1;

                        const start = () => {
                            intervalo = setInterval(function animateScroll() {
                                if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
                                    direction = -1;
                                }
                                if (carousel.scrollLeft <= 1 && direction === -1) {
                                    direction = 1;
                                }
                                carousel.scrollLeft += scrollSpeed * direction;
                            }, 16);
                        };

                        const stop = () => clearInterval(intervalo);

                        carousel.addEventListener('mouseover', stop);
                        carousel.addEventListener('mouseout', start);
                        start();
                    });
                });
        });

    });


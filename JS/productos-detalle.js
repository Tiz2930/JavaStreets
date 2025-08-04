

fetch("../data/ecommerce.json")
    .then(res => res.json())
    .then(data => {
        const id = localStorage.getItem("selectedProductId");
        const allProducts = data.flatMap(user => user.products);
        const product = allProducts.find(p => p.id == id);

        if (product) {
            const container = document.getElementById("product-detail");
            container.innerHTML = `
            
            <section class="showProducts">
                <div class="containerImgEcommerce">
                    <img id="mainImagen" class="imgProductos" src="${product.image}" />
                    <div id="galeriaProductos" class="containerGaleria"></div>
                </div>


                <div class="containerDetalle">
                    <h1>${product.name}</h1>
                    <hr>
                    <p class="stockProducts">Stock: ${product.stock}</p>
                    <p>Precio: $${product.price}</p>
                    <hr>
                    <div class="btns">
                        <span class="btnProducts">Comprar</span> 
                        <span class="btnProducts">Carrito</span>
                    </div>
                </div>
            </section>

            <div class="moreInfo">
                <p>Descripción: ${product.description || "lorem" }</p>
            </div>
            `;
            }
            
                        

        // Supongamos que `product` es el objeto del JSON
        const mainImagen = document.getElementById("mainImagen");
        const galeriaProductos = document.getElementById("galeriaProductos");

        mainImagen.src = product.image[0]; // imagen principal inicial

        product.image.forEach((imgSrc, index) => {
            const box = document.createElement("img");
            box.src = imgSrc;
            box.classList.add("boxImg");

            // Evento click para cambiar la imagen principal
            box.addEventListener("click", () => {
                mainImagen.src = imgSrc;
            });

            galeriaProductos.appendChild(box);
        });






    });

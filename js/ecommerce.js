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
            });

            //!

    });

// const merch = document.getElementById("boxEcommerce");


// const gridProducts = (comerce) => {

//     comerce.forEach(usuario => {
//         usuario.products.forEach(product => {
//             const productCard = document.createElement("div");
//             productCard.classList.add("productCard");

//             productCard.innerHTML =

//                 `
//         <div class="userCard">
//         <img class="userImage" src="${product.userImage}" alt="User Image">
//         <p>${product.user}<p>
//         </div>

//         <section class="gridFunction">
        
//         <article class="card">
//             <h2 class="titleProduct">${product.name}</h2>
//             <img class="imgProduct" src="${product.image}" alt="">
//             <p class="price"> USD $${product.price}</p>
//         </article>

//         </section>
//     `
//             merch.append(productCard)
//         });

//     });
// }





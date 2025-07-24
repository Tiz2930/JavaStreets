fetch("../data/eventos.json")
  .then((response) => response.json())
    .then((data)=>{
        const eventos= document.getElementById("eventos-container");

        data.forEach((eventos, index) =>{
            //Contenedor de la card
            const card=document.createElement("div");
            card.className= "card"
        })
    })
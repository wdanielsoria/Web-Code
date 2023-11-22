// let cards = document.getElementById("card");

// function pintarCards(arrayEventos) {
//   arrayEventos.forEach((evento) => {

//       let tarjeta = document.createElement("div");
//       tarjeta.className = "card";
//       tarjeta.style.width = "18rem";
//       tarjeta.innerHTML = `
//       <img src="${evento.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title text-black">${evento.name}</h5>
//             <p class="card-text text-secondary">${evento.description}</p>
//             <p class="card-text text-black">${evento.date}</p>
//             <p class="card-text text-black">${evento.category}</p>
//             <p class="card-text text-black">${evento.place}</p>
//             <p class="card-text text-black">${evento.capacity}</p>
//             <p class="card-text text-black">${evento.assistance}</p>
//             <p class="card-text text-black">${evento.price}</p>
//       `;
//       cards.appendChild(tarjeta);
//     })
//   };

// pintarCards(data.events);

//--------------------CREAR TARJETAS--------------------
function pintarDetails(evento) {
  let container = document.getElementById("card");
  let div = document.createElement("div");
  div.className = "card";
  div.style.maxwidth = "80%";
  div.style.minHeight = "20rem";
  div.style.padding = "0.2rem";
  div.innerHTML = `
  <img src="${evento.image}" class="card-img-top" alt="...">
  <div class="card-body bg-black bg-gradient">
    <h5 class="card-title text-success">Name: ${evento.name}</h5>
    <p class="card-text text-warning">Description: ${evento.description}</p>
    <p class="card-text text-white">Date: ${evento.date}</p>
    <p class="card-text text-white">Category: ${evento.category}</p>
    <p class="card-text text-white">Place: 	${evento.place}</p>
    <p class="card-text text-white">Capacity: ${evento.capacity}</p>
    <p class="card-text text-white">
  ${evento.assistance !== undefined ? `Assistance: ${evento.assistance}` : evento.estimate !== undefined ? `Estimate: ${evento.estimate}` : ''}
</p>
    <p class="card-text text-white">Price: ${evento.price}</p>
  </div>
  `;
  container.appendChild(div);
}

// if (document.title == "Details") {
//   const queryString = location.search
//   const params = new URLSearchParams(queryString)
//   const id = params.get('_id')
//   let arrayFiltrado = data.events.filter((evento) => evento._id == id)
//   pintarDetails(arrayFiltrado[0])
// }

//--------------------API--------------------
let arrayFiltrado = [];

if (document.title == "Details") {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("_id");

  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      arrayFiltrado = data.events.filter((evento) => evento._id == id);
      if (arrayFiltrado.length > 0) {
        pintarDetails(arrayFiltrado[0]);
      }
    })
    .catch((error) => console.error(error));
}

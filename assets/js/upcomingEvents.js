let card = document.querySelector("#card");

function crearYMostrarEventos(arregloEventos, dondeMostrar) {
  let tarjeta = "";
  for (evento of arregloEventos) {
    let clasificacionTarjeta = "";
    if (evento.date > data.currentDate)
      tarjeta += `<div class="card ${clasificacionTarjeta} bg-success-subtle : "style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-black">${evento.name}</h5>
            <p class="card-text text-secondary">${evento.description}</p>
            <div class="navbar">
                <p class="text-black">${evento.price}</p>
                <a href="/assets/pages/details.html" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`;
  }
  dondeMostrar.innerHTML = tarjeta;
}
crearYMostrarEventos(data.events, card);
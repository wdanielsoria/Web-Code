let card = document.querySelector("#card");

function crearYMostrarEventos(arregloEventos, dondeMostrar) {
    let tarjeta = "";

    for (evento of arregloEventos) {
        let clasificacionTarjeta = "";
        if (evento.date < "2023-01-01") {
            clasificacionTarjeta = 'bg-warning';
        } else {
            clasificacionTarjeta = 'bg-success';
        }
        tarjeta +=
            `<div class="card ${clasificacionTarjeta}" : "bg-success" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" alt="CINEMA">
        <div class="card-body">
            <h5 class="card-title ${evento.date < "2023-01-01" ? 'text-danger' : 'text-white'}">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <div class="navbar">
                <p>${evento.price}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`
    }
    dondeMostrar.innerHTML = tarjeta;
}

crearYMostrarEventos(data.events._id, card);
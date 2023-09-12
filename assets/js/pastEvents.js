// let card = document.querySelector("#card");

// function crearYMostrarEventos(arregloEventos, dondeMostrar) {
//   let tarjeta = "";
//   for (evento of arregloEventos) {
//     let clasificacionTarjeta = "";
//     if (evento.date < data.currentDate)
//       tarjeta += `<div class="card ${clasificacionTarjeta} bg-danger-subtle : "style="width: 18rem;">
//         <img src="${evento.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title text-black">${evento.name}</h5>
//             <p class="card-text text-secondary">${evento.description}</p>
//             <div class="navbar">
//                 <p class="text-black">${evento.price}</p>
//                 <a href="/assets/pages/details.html" class="btn btn-primary">Details</a>
//             </div>
//         </div>
//     </div>`;
//   }
//   dondeMostrar.innerHTML = tarjeta;
// }
// crearYMostrarEventos(data.events, card);

//--------------------CREAR TARJETAS--------------------
let cards = document.getElementById("card");

function pintarCards(arrayEventos) {
  cards.innerHTML = "";
  arrayEventos.forEach((evento) => {
    let tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.style.width = "18rem";
    tarjeta.innerHTML = `
      <img src="${evento.image}" class="card-img-top" alt="...">
        <div class="card-body bg-danger-subtle">
            <h5 class="card-title text-black">${evento.name}</h5>
             <p class="card-text text-secondary">${evento.description}</p>
            <div class="navbar">
                <p class="text-black">${evento.price}</p>
                <a href="/assets/pages/details.html?_id=${evento._id}" class="btn btn-primary">Details</a>
            </div>
        </div>
      `;
    cards.appendChild(tarjeta);
  });
}
let todosLosEventos = [];
// pintarCards(todosLosEventos);

//--------------------API--------------------
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((dataAPI) => {
    console.log(dataAPI.events);
    todosLosEventos = dataAPI.events.filter(event => event.date < dataAPI.currentDate);
    console.log(todosLosEventos);
    pintarCards(todosLosEventos);
  })
  .catch((error) => console.log(error));

console.log(todosLosEventos);
console.log("Despues del fetch");

//--------------------CREAR CHECKBOX----------------------
const elementos = [
  {
    id: "inlineCheckbox1",
    value: "food",
    label: "Food",
  },
  {
    id: "inlineCheckbox2",
    value: "museum",
    label: "Museum",
  },
  {
    id: "inlineCheckbox3",
    value: "party",
    label: "Party",
  },
  {
    id: "inlineCheckbox4",
    value: "concert",
    label: "Concert",
  },
  {
    id: "inlineCheckbox5",
    value: "race",
    label: "Race",
  },
  {
    id: "inlineCheckbox6",
    value: "book",
    label: "Book",
  },
  {
    id: "inlineCheckbox7",
    value: "cinema",
    label: "Cinema",
  },
];
const filtrosDiv = document.getElementById("filtros");

elementos.forEach((elemento) => {
  const div = document.createElement("div");
  div.className = "form-check form-check-inline";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "form-check-input";
  input.name = "inlineRadioOptions";
  input.id = elemento.id;
  input.value = elemento.value;

  const label = document.createElement("label");
  label.className = "form-check-label text-light";
  label.htmlFor = elemento.id;
  label.textContent = elemento.label;

  div.appendChild(input);
  div.appendChild(label);
  filtrosDiv.appendChild(div);
});

//--------------------BARRA DE BÚSQUEDA--------------------
const inputTexto = document.getElementById("texto");

inputTexto.addEventListener("input", () => {
  // let arrayFiltrado = filtrarPorTexto(data.events, inputTexto.value);
  // pintarCards(arrayFiltrado);
  filtroCombinado();
});

function filtrarPorTexto(arrayDeEventos, texto) {
  let eventosFiltrados = arrayDeEventos.filter((evento) =>
    evento.name.toLowerCase().includes(texto.toLowerCase())
  );
  return eventosFiltrados;
}

//--------------------FILTROS--------------------
const divFiltros = document.getElementById("filtros");

divFiltros.addEventListener("change", () => {
  // console.log("Algo ha cambiado");
  // let arrayFiltrado = filtrarPorCategoria(data.events);
  // console.log(arrayFiltrado);
  // pintarCards(arrayFiltrado);
  filtroCombinado();
});

function filtrarPorCategoria(arrayDeEventos) {
  let filtros = document.querySelectorAll("input[type='checkbox']");
  let arrayFiltros = Array.from(filtros);
  let filtrosResaltados = arrayFiltros.filter((ckeck) => ckeck.checked);
  let valoresChecks = filtrosResaltados.map((check) => check.value);
  console.log(valoresChecks);
  if (valoresChecks.length == 0) {
    return arrayDeEventos;
  }
  let eventosFiltrados = arrayDeEventos.filter((evento) =>
    valoresChecks.some((category) =>
      evento.category.toLowerCase().includes(category)
    )
  );
  return eventosFiltrados;
}

//-------------------COMBINANDO FILTROS--------------------
function filtroCombinado() {
  let filtradoPorTexto = filtrarPorTexto(todosLosEventos, inputTexto.value);
  let filtradoPorTextoYCategoria = filtrarPorCategoria(filtradoPorTexto);

  if (filtradoPorTextoYCategoria.length === 0) {
    cards.innerHTML =
      '<p style="background-color: yellow;">"Sorry, no matches found for your search. Please try again."</p>';
  } else {
    pintarCards(filtradoPorTextoYCategoria);
  }
}

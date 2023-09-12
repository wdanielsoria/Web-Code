// //--------------------TABLA 2--------------------
// let data2 = [];

// const tabla2 = document.querySelector("#tabla2");

// traerDatos2();

// function traerDatos2() {
//   fetch("https://mindhub-xj03.onrender.com/api/amazing")
//     .then((response) => response.json())
//     .then((dataAPI) => {
//       dataAPI.events = dataAPI.events.filter(event => event.date > dataAPI.currentDate);
//       console.log(dataAPI.events);
//       data2 = dataAPI.events;
//       filtrarEventosYCalcularTotal("Food");
//       filtrarEventosYCalcularTotal("Books");
//       filtrarEventosYCalcularTotal("Party");
//       filtrarEventosYCalcularTotal("Race")
//       filtrarEventosYCalcularTotal("Concert");
//       filtrarEventosYCalcularTotal("Museum");
//     });
// }

// function filtrarEventosPorCategoria(category) {
//   const eventosFiltrados = data2.filter(event => event.category === category);
//   return eventosFiltrados;
// }

// function ingresoTotalPorCategoria(events) {
//   let ingresosTotales = 0;
//   events.forEach(event => {
//     const ingreso = event.price * (event.assistance || event.estimate || 0);
//     ingresosTotales += ingreso;
//   });
//   return ingresosTotales;
// }

// function asistenciaEstimadoTotalPorCategoria(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   let asistenciaEstimadoTotal = 0;
//   eventosFiltrados.forEach(event => {
//     asistenciaEstimadoTotal += event.assistance || event.estimate || 0;
//   });
//   return asistenciaEstimadoTotal;
// }

// function capacidadTotalPorCategoria(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   let capacidadTotal = 0;
//   eventosFiltrados.forEach(event => {
//     capacidadTotal += event.capacity || 0;
//   });
//   return capacidadTotal;
// }

// function porcentajeAsistenciaPorCategoria(category) {
//   const asistenciaTotal = asistenciaEstimadoTotalPorCategoria(category);
//   const capacidadTotal = capacidadTotalPorCategoria(category);
//   if (capacidadTotal === 0) {
//     return 0;
//   }
//   const porcentaje = (asistenciaTotal / capacidadTotal) * 100;
//   return porcentaje.toFixed(2);
// }

// function mostrarResultados(category, ingresosTotales, porcentajeAsistencia) {
//   const tabla = document.getElementById("tabla2");
//   const row = tabla.insertRow(-1);
//   const celda1 = row.insertCell(0);
//   const celda2 = row.insertCell(1);
//   const celda3 = row.insertCell(2);
//   celda1.innerHTML = category;
//   celda2.innerHTML = `$${ingresosTotales}`;
//   celda3.innerHTML = `${porcentajeAsistencia}%`;
// }

// function filtrarEventosYCalcularTotal(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   const ingresosTotales = ingresoTotalPorCategoria(eventosFiltrados);
//   const porcentajeAsistencia = porcentajeAsistenciaPorCategoria(category);
//   mostrarResultados(category, ingresosTotales, porcentajeAsistencia);
// }

// //--------------------TABLA 3--------------------
// let data3 = [];

// const tabla3 = document.querySelector("#tabla3");

// traerDatos3();

// function traerDatos3() {
//   fetch("https://mindhub-xj03.onrender.com/api/amazing")
//     .then((response) => response.json())
//     .then((dataAPI) => {
//       dataAPI.events = dataAPI.events.filter(event => event.date < dataAPI.currentDate);
//       console.log(dataAPI.events);
//       data3 = dataAPI.events;
//       filtrarEventosYCalcularTotal("Food");
//       filtrarEventosYCalcularTotal("Museum");
//       filtrarEventosYCalcularTotal("Concert");
//       filtrarEventosYCalcularTotal("Race")
//       filtrarEventosYCalcularTotal("Books");
//       filtrarEventosYCalcularTotal("Cinema");
//       filtrarEventosYCalcularTotal("Party");
//     });
// }

// function filtrarEventosPorCategoria(category) {
//   const eventosFiltrados = data3.filter(event => event.category === category);
//   return eventosFiltrados;
// }

// function ingresoTotalPorCategoria(events) {
//   let ingresosTotales = 0;
//   events.forEach(event => {
//     const ingreso = event.price * (event.assistance || event.estimate || 0);
//     ingresosTotales += ingreso;
//   });
//   return ingresosTotales;
// }

// function asistenciaEstimadoTotalPorCategoria(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   let asistenciaEstimadoTotal = 0;
//   eventosFiltrados.forEach(event => {
//     asistenciaEstimadoTotal += event.assistance || event.estimate || 0;
//   });
//   return asistenciaEstimadoTotal;
// }

// function capacidadTotalPorCategoria(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   let capacidadTotal = 0;
//   eventosFiltrados.forEach(event => {
//     capacidadTotal += event.capacity || 0;
//   });
//   return capacidadTotal;
// }

// function porcentajeAsistenciaPorCategoria(category) {
//   const asistenciaTotal = asistenciaEstimadoTotalPorCategoria(category);
//   const capacidadTotal = capacidadTotalPorCategoria(category);
//   if (capacidadTotal === 0) {
//     return 0;
//   }
//   const porcentaje = (asistenciaTotal / capacidadTotal) * 100;
//   return porcentaje.toFixed(2);
// }

// function mostrarResultados(category, ingresosTotales, porcentajeAsistencia) {
//   const tabla = document.getElementById("tabla3");
//   const row = tabla.insertRow(-1);
//   const celda1 = row.insertCell(0);
//   const celda2 = row.insertCell(1);
//   const celda3 = row.insertCell(2);
//   celda1.innerHTML = category;
//   celda2.innerHTML = `$${ingresosTotales}`;
//   celda3.innerHTML = `${porcentajeAsistencia}%`;
// }

// function filtrarEventosYCalcularTotal(category) {
//   const eventosFiltrados = filtrarEventosPorCategoria(category);
//   const ingresosTotales = ingresoTotalPorCategoria(eventosFiltrados);
//   const porcentajeAsistencia = porcentajeAsistenciaPorCategoria(category);
//   mostrarResultados(category, ingresosTotales, porcentajeAsistencia);
// }

//--------------------TABLA 1--------------------
let data = [];

let highestAssistance = [];
let lowestAssistance = [];
let largerCapacity = [];

const tabla = document.querySelector("#tabla");

traerDatos();

function traerDatos() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((dataAPI) => {
      console.log(dataAPI.events);
      data = dataAPI.events;
      extraerDatosPrimeraTabla(data);
      pintarEstadisticas(dataAPI.events);
    });
}

// (assistance * 100) / capacity

function extraerDatosPrimeraTabla(datos) {
  datos.sort(
    (a, b) =>
      (b.assistance * 100) / b.capacity - (a.assistance * 100) / a.capacity
  );
  highestAssistance.push(datos[0]);
  datos.sort(
    (a, b) =>
      (a.assistance * 100) / a.capacity - (b.assistance * 100) / b.capacity
  );
  lowestAssistance.push(datos[0]);
  datos.sort(
    (a, b) => b.capacity - a.capacity
  );
  largerCapacity.push(datos[0]);
}

function pintarEstadisticas() {
  let html = "";
  for (let i = 0; i < highestAssistance.length; i++) {
    html += `<tr>
    <td>${highestAssistance[i].name}</td>
    <td>${lowestAssistance[i].name}</td>
    <td>${largerCapacity[i].name}</td>
  </tr>`;
  }
  tabla.innerHTML = html;
}

//--------------------TABLA 2--------------------

const tabla2 = document.querySelector("#tabla2");

traerDatos2();

function traerDatos2() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((dataAPI) => {
      const datosFiltrados = dataAPI.events.filter(
        (event) => new Date(event.date) > new Date(dataAPI.currentDate)
      );
      console.log(datosFiltrados);
      pintarTabla2(datosFiltrados);
    });
}

function pintarTabla2(data2) {
  const categorias = ["Food", "Books", "Party", "Race", "Concert", "Museum"];

  categorias.forEach((category) => {
    const eventosFiltrados = data2.filter((event) => event.category === category);
    const ingresosTotales = calcularIngresosTotales(eventosFiltrados);
    const porcentajeAsistencia = calcularPorcentajeAsistencia(eventosFiltrados);

    const html = `<tr>
      <td>${category}</td>
      <td>$${ingresosTotales.toLocaleString()}</td>
      <td>${porcentajeAsistencia.toFixed(2)}%</td>
    </tr>`;

    tabla2.innerHTML += html;
  });
}

function calcularIngresosTotales(events) {
  return events.reduce((total, event) => {
    const ingreso = (event.price || 0) * (event.assistance || event.estimate || 0);
    return total + ingreso;
  }, 0);
}

function calcularPorcentajeAsistencia(events) {
  const asistenciaTotal = events.reduce(
    (total, event) => total + (event.assistance || event.estimate || 0),
    0
  );
  const capacidadTotal = events.reduce(
    (total, event) => total + (event.capacity || 0),
    0
  );

  if (capacidadTotal === 0) {
    return 0;
  }

  return (asistenciaTotal / capacidadTotal) * 100;
}

//--------------------TABLA 3--------------------

const tabla3 = document.querySelector("#tabla3");

traerDatos3();

function traerDatos3() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((dataAPI) => {
      const datosFiltrados = dataAPI.events.filter(
        (event) => new Date(event.date) < new Date(dataAPI.currentDate)
      );
      console.log(datosFiltrados);
      pintarTabla3(datosFiltrados);
    });
}

function pintarTabla3(data3) {
  const categorias = ["Food", "Museum", "Concert", "Race", "Books", "Cinema", "Party"];

  categorias.forEach((category) => {
    const eventosFiltrados = data3.filter((event) => event.category === category);
    const ingresosTotales = calcularIngresosTotales(eventosFiltrados);
    const porcentajeAsistencia = calcularPorcentajeAsistencia(eventosFiltrados);

    const html = `<tr>
      <td>${category}</td>
      <td>$${ingresosTotales.toLocaleString()}</td>
      <td>${porcentajeAsistencia.toFixed(2)}%</td>
    </tr>`;

    tabla3.innerHTML += html;
  });
}
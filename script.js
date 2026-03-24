let activeDay = 1;
let activeRoute = "aventura";

function setDay(day) {
  activeDay = day;
  render();
}

function setRoute(route) {
  activeRoute = route;
  render();
}

function step({ time, title, desc, image }) {
  return `
    <div class="step">
      ${image ? `<img src="${image}">` : ""}
      <div class="time">${time}</div>
      <div class="title">${title}</div>
      <div class="desc">${desc}</div>
    </div>
  `;
}

function render() {
  const content = document.getElementById("content");

  // SEXTA
  if (activeDay === 1) {
    content.innerHTML = `
      ${step({
        time: "17:30",
        title: "Saída de Jaraguá",
        desc: "Início da viagem até Braço do Norte."
      })}
      ${step({
        time: "23:00",
        title: "Chegada",
        desc: "Check-in e descanso."
      })}
    `;
  }

  // SÁBADO
  if (activeDay === 2) {
    content.innerHTML = `
      ${step({
        time: "09:30",
        title: "Pirâmides",
        desc: "Explorar o local pela manhã.",
        image: "images/piramides.jpg"
      })}
      ${step({
        time: "Tarde",
        title: "Trilha",
        desc: "Subida e fotos."
      })}
      ${step({
        time: "Noite",
        title: "Descanso",
        desc: "Volta para o Airbnb."
      })}
    `;
  }

  // DOMINGO
  if (activeDay === 3) {
    content.innerHTML = `
      <div class="routes">
        <button onclick="setRoute('aventura')">Aventura</button>
        <button onclick="setRoute('tranquila')">Tranquila</button>
      </div>

      ${
        activeRoute === "aventura"
          ? `
        ${step({
          time: "08:00",
          title: "Serra do Corvo Branco",
          desc: "Subida com mirantes.",
          image: "images/serra.jpg"
        })}
        ${step({
          time: "Almoço",
          title: "Rio do Sul",
          desc: "Parada para almoço."
        })}
        ${step({
          time: "Tarde",
          title: "Pomerode",
          desc: "Parada rápida.",
          image: "images/pomerode.jpg"
        })}
      `
          : `
        ${step({
          time: "Manhã",
          title: "Saída tranquila",
          desc: "Sem pressa."
        })}
        ${step({
          time: "Almoço",
          title: "Rio do Sul",
          desc: "Parada."
        })}
        ${step({
          time: "Tarde",
          title: "Pomerode",
          desc: "Passeio com calma.",
          image: "images/pomerode.jpg"
        })}
      `
      }
    `;
  }
}

// iniciar
render();

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

function card({ time, title, desc, image }) {
  return `
    <div class="card">
      ${image ? `<img src="${image}">` : ""}
      <div class="card-content">
        <div class="time">${time}</div>
        <div class="title">${title}</div>
        <div class="desc">${desc}</div>
      </div>
    </div>
  `;
}

function render() {
  const content = document.getElementById("content");

  if (activeDay === 1) {
    content.innerHTML = `
      ${card({
        time: "17:30",
        title: "Saída de Jaraguá",
        desc: "Começo da viagem até Braço do Norte."
      })}
      ${card({
        time: "23:00",
        title: "Chegada",
        desc: "Check-in e descanso."
      })}
    `;
  }

  if (activeDay === 2) {
    content.innerHTML = `
      ${card({
        time: "09:30",
        title: "Pirâmides",
        desc: "Explorar o local pela manhã.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
      })}
      ${card({
        time: "Tarde",
        title: "Trilha",
        desc: "Subida e fotos."
      })}
      ${card({
        time: "Noite",
        title: "Descanso",
        desc: "Volta para o Airbnb."
      })}
    `;
  }

  if (activeDay === 3) {
    content.innerHTML = `
      <div class="routes">
        <button onclick="setRoute('aventura')">Aventura</button>
        <button onclick="setRoute('tranquila')">Tranquila</button>
      </div>

      ${
        activeRoute === "aventura"
          ? `
        ${card({
          time: "08:00",
          title: "Serra do Corvo Branco",
          desc: "Subida com mirantes.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
        })}
        ${card({
          time: "Almoço",
          title: "Rio do Sul",
          desc: "Parada para almoço."
        })}
        ${card({
          time: "Tarde",
          title: "Pomerode",
          desc: "Parada rápida para café.",
          image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
        })}
      `
          : `
        ${card({
          time: "Manhã",
          title: "Saída tranquila",
          desc: "Sem pressa."
        })}
        ${card({
          time: "Almoço",
          title: "Rio do Sul",
          desc: "Parada."
        })}
        ${card({
          time: "Tarde",
          title: "Pomerode",
          desc: "Passeio com calma.",
          image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
        })}
      `
      }
    `;
  }
}

render();

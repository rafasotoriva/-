const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const copyTextBtn = document.getElementById("copyTextBtn");
const waLink = document.getElementById("waLink");
const badge = document.getElementById("badge");
const smallNote = document.getElementById("smallNote");
const todayLabel = document.getElementById("todayLabel");

// Personaliza aqui rapidinho se quiser:
const INVITE = {
  // se quiser colocar o nome dela:
  name: "",
  // texto que aparece no cartão
  todayText: "hoje à noite ✨",
  // mensagem que vai pro Whats
  base:
    "Oi :) Eu ainda tô em viagem, mas chego em casa por volta das 19h. Queria um tempinho de qualidade contigo hoje — mesmo de longe — pra gente assistir um filme juntinhas (cada uma na sua casa) 💗",
  extra:
    "Eu só queria descansar um pouquinho quando eu chegar. Se tu estiver cansada também, tá tudo bem marcar outro dia 🤍",
};

todayLabel.textContent = INVITE.todayText;

function buildWhatsLink(text) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

function setChoice(choice) {
  const namePart = INVITE.name ? ` ${INVITE.name}` : "";

  if (choice === "OUTRO_DIA") {
    badge.textContent = "Sem pressão";
    resultText.textContent =
      `Tudo bem${namePart} 🤍 A gente marca no dia que tu estiver mais descansada. Eu só queria te fazer um convite com carinho.`;
    smallNote.textContent = "quando tu quiser, eu tô aqui ✨";

    const fullText =
      `${INVITE.base}\n\n` +
      `Se hoje não der, tá tudo bem — a gente marca outro dia 🤍\n` +
      `Me diz qual dia/horário fica melhor pra ti?`;

    waLink.href = buildWhatsLink(fullText);
    setupCopy(fullText);
    result.hidden = false;
    return;
  }

  badge.textContent = "Combinado";
  resultText.textContent = `Fechado${namePart}! Então hoje por volta das ${choice}. Eu separo um filme e a gente assiste juntinhas 💌`;
  smallNote.textContent = "prometo: bem leve, bem gostoso, bem nosso 🤍";

  const fullText =
    `${INVITE.base}\n\n` +
    `Tu prefere começar por volta das ${choice}?\n` +
    `${INVITE.extra}`;

  waLink.href = buildWhatsLink(fullText);
  setupCopy(fullText);
  result.hidden = false;
}

function setupCopy(text) {
  copyTextBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      copyTextBtn.textContent = "Copiado ✨";
      setTimeout(() => (copyTextBtn.textContent = "Copiar mensagem"), 1400);
    } catch {
      prompt("Copia aqui:", text);
    }
  };
}

document.querySelectorAll("button[data-time]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.getAttribute("data-time");
    setChoice(choice);
  });
});

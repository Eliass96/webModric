const frases = [
    "No importa de d\xf3nde vienes, lo importante es a d\xf3nde vas.",
    "El trabajo duro siempre supera al talento, si el talento no trabaja duro.",
    "Nunca te rindas, incluso cuando los dem\xe1s no crean en ti.",
    "El f\xfatbol no es solo un deporte, es una forma de vida.",
    "Siempre doy lo mejor de m\xed porque el equipo siempre es lo primero.",
    "Lo que haces en los momentos dif\xedciles define qui\xe9n eres.",
    "Cada partido es una nueva oportunidad para demostrar tu val\xeda.",
    "No hay atajos hacia el \xe9xito, solo esfuerzo constante.",
    "Los sue\xf1os se cumplen si tienes la valent\xeda de perseguirlos.",
    "El \xe9xito no es el final, el fracaso no es fatal: lo que cuenta es el coraje de continuar."
];
const randomIndex = Math.floor(Math.random() * frases.length);
const randomQuote = frases[randomIndex];
document.getElementById("randomQuote").innerText = randomQuote;

//# sourceMappingURL=frases.f81bef16.js.map

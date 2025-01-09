// Preguntas y respuestas
const questions = [
    {
        question: "\xbfD\xf3nde naci\xf3 Luka Modri\u0107?",
        answers: [
            "Zadar, Croacia",
            "Zagreb, Croacia",
            "Split, Croacia"
        ],
        correct: 0
    },
    {
        question: "\xbfEn qu\xe9 a\xf1o debut\xf3 Luka Modri\u0107 con el Real Madrid?",
        answers: [
            "2011",
            "2012",
            "2013"
        ],
        correct: 1
    },
    {
        question: "\xbfQu\xe9 posici\xf3n juega Luka Modri\u0107?",
        answers: [
            "Defensa",
            "Delantero",
            "Centrocampista"
        ],
        correct: 2
    },
    {
        question: "\xbfCu\xe1ntas veces ha ganado la Champions League con el Real Madrid (en Enero de 2025)?",
        answers: [
            "4",
            "5",
            "6"
        ],
        correct: 2
    },
    {
        question: "\xbfEn qu\xe9 a\xf1o gan\xf3 el Bal\xf3n de Oro?",
        answers: [
            "2018",
            "2017",
            "2016"
        ],
        correct: 0
    },
    {
        question: "\xbfContra qu\xe9 equipo debut\xf3 en la Champions con el Real Madrid?",
        answers: [
            "PSG",
            "Manchester City",
            "Dinamo Zagreb"
        ],
        correct: 1
    },
    {
        question: "\xbfQu\xe9 dorsal lleva Luka Modri\u0107?",
        answers: [
            "7",
            "10",
            "8"
        ],
        correct: 1
    },
    {
        question: "\xbfQu\xe9 t\xedtulo gan\xf3 Croacia en 2018?",
        answers: [
            "Ninguno, fue subcampe\xf3n del Mundial",
            "Eurocopa",
            "Liga de Naciones"
        ],
        correct: 0
    },
    {
        question: "\xbfQu\xe9 equipo europeo fich\xf3 a Luka antes del Real Madrid?",
        answers: [
            "Dinamo Zagreb",
            "Tottenham Hotspur",
            "Bayern Munich"
        ],
        correct: 1
    },
    {
        question: "\xbfCu\xe1ntas temporadas lleva en el Real Madrid (a 2025)?",
        answers: [
            "11",
            "12",
            "10"
        ],
        correct: 1
    }
];
let currentQuestion = 0;
let score = 0;
// Elementos del DOM
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");
// Cargar una pregunta
function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    question.answers.forEach((answer, index)=>{
        const button = document.createElement("button");
        button.className = "btn btn-outline-primary d-flex align-items-center";
        button.textContent = answer;
        button.onclick = ()=>selectAnswer(index, button);
        answersElement.appendChild(button);
    });
    nextButton.disabled = true;
}
// Seleccionar respuesta
function selectAnswer(selectedIndex, selectedButton) {
    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    // Resaltar la respuesta seleccionada
    answersElement.childNodes.forEach((button, index)=>{
        button.disabled = true;
        if (index === question.correct) {
            button.classList.add("correct");
            button.innerHTML += " \u2705";
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add("incorrect");
            button.innerHTML += " \u274C";
        }
    });
    if (isCorrect) score++;
    nextButton.disabled = false;
}
// Siguiente pregunta
nextButton.addEventListener("click", ()=>{
    currentQuestion++;
    if (currentQuestion < questions.length) loadQuestion();
    else showResults();
});
// Mostrar resultados
function showResults() {
    questionElement.textContent = `Juego terminado. Tu puntuaci\xf3n es ${score}/${questions.length}.`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
}
// Iniciar juego
loadQuestion();

//# sourceMappingURL=juego.ff836f59.js.map

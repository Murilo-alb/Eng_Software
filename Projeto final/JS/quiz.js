/* quiz.js */

let soundAtual = 0;
const sound = ["som1_quiz.ogg", "som2_quiz.ogg","som3_quiz.ogg","som4_quiz.ogg"]

var audio = document.getElementById('myAudio');

function playAudio() {
	audio.play(); 
}

function pauseAudio() {
	audio.pause();
}

function stopAudio() {
	audio.pause();
	audio.currentTime = 0;
}

function atualizarSound(){
	
	audio.src = 'audio/'+sound[soundAtual];
}

function proximoAudio(){
	
	if(soundAtual < soundAtual.length - 1){
		
		soundAtual++;
	}
}

const quizData = [
    {
        question: "Qual animal prefere ficar acordado à noite e gosta de tomar sol em grupo durante o dia?",
        options: ["Jacaré", "Jabuti", "Tamanduá", "Jibóia"],
        correct: 0
    },
    {
        question: "Qual animal vive em média 80 anos e tem apenas duas espécies no Brasil?",
        options: ["Jacaré", "Jabuti", "Papagaio", "Arara"],
        correct: 1
    },
    {
        question: "Qual animal pode chegar até 4 metros e sua cabeça tem formato de retângulo?",
        options: ["Jacaré", "Boto", "Tamanduá", "Jiboia"],
        correct: 3
    },
    {   
        question: "Me diga, qual animal se alimenta apenas de insetos e seu longo nariz permite ter um olfato muito poderoso?",
        options: ["Tamanduá", "Piranha", "Onça", "Boto"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = `<h1>${quizData[currentQuestionIndex].question}</h1>`;
    optionsContainer.innerHTML = "";

    quizData[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.onclick = () => checkAnswer(button, index);
        optionsContainer.appendChild(button);
    });

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.id = "error-message";
    errorMessage.textContent = "Resposta incorreta. Tente novamente.";
    optionsContainer.appendChild(errorMessage);
}

function checkAnswer(button, selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    const errorMessage = document.getElementById("error-message");

    if (selectedIndex === correctIndex) {
        currentQuestionIndex++;
		proximoAudio();
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
			soundAtual++;
			atualizarSound();
        } else {
            clearInterval(timerInterval);
			const tempoQuiz = timeLeft;
			localStorage.setItem('tempoQuiz', tempoQuiz);
            window.location.href = '../HTML/proxFase1.html';
        }
    } else {
        button.disabled = true;
        errorMessage.style.display = "block";
    }
}

function updateTimer() {
    const timerElement = document.getElementById("timer");
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Tempo restante: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("O tempo acabou! Quiz encerrado.");
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.querySelectorAll('.option').forEach(button => {
            button.disabled = true;
        });
        window.location.href = "../index.html";
    } else {
        timeLeft--;
    }
}


loadQuestion();
timerInterval = setInterval(updateTimer, 1000);

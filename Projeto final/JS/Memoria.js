const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timerProgressivo = document.querySelector('.timer-progressivo');

document.body.style.zoom = "75%";

const characters = [
    'sapo', 'cobra', 'tucano', 'piranha', 'papagaio',
    'tartaruga', 'macaco', 'arara', 'onça', 'boto'
];

let primeiraCarta = null;
let segundaCarta = null;
let cartasViradas = 0;

let startTimeProgressivo = 0; // Tempo inicial do cronômetro progressivo

let loopProgressivo;

const checkEndGame = () => {
    if (cartasViradas === 20) {
        clearInterval(loopProgressivo);
        const tempoProgressivo = timerProgressivo.innerHTML;
        localStorage.setItem('tempoProgressivo', tempoProgressivo);
        const Jogador = spanPlayer.innerHTML;
        localStorage.setItem('Jogador', Jogador);
        alert(`Parabéns, ${Jogador}! Seu tempo foi: ${tempoProgressivo} segundos`);
        window.location.href = '../HTML/proxFase2.html'; // Redireciona para a tela de pontuação com o tempo e o nome na URL
    }
};

const checkCard = () => {
    if (primeiraCarta.dataset.character === segundaCarta.dataset.character) {
        primeiraCarta.classList.add('disable-card');
        segundaCarta.classList.add('disable-card');
        primeiraCarta = null;
        segundaCarta = null;
        cartasViradas += 2;
        checkEndGame();
    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove('reveal-card');
            segundaCarta.classList.remove('reveal-card');
            primeiraCarta = null;
            segundaCarta = null;
        }, 500);
    }
};

const revealCard = ({ target }) => {
    if (target.parentNode.classList.contains('reveal-card')) {
        return;
    }
    if (primeiraCarta === null) {
        primeiraCarta = target.parentNode;
        primeiraCarta.classList.add('reveal-card');
    } else if (segundaCarta === null && target.parentNode !== primeiraCarta) {
        segundaCarta = target.parentNode;
        segundaCarta.classList.add('reveal-card');
        checkCard();
    }
};

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const createCard = character => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-character', character);

    const frente = document.createElement('div');
    frente.className = 'face frente';
    frente.style.backgroundImage = `url('../IMG/${character}.png')`;

    const costas = document.createElement('div');
    costas.className = 'face costas';
    costas.style.backgroundImage = `url('../IMG/back.png')`;

    card.appendChild(frente);
    card.appendChild(costas);

    card.addEventListener('click', revealCard);

    return card;
};

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    shuffleArray(duplicateCharacters);

    for (let character of duplicateCharacters) {
        const card = createCard(character);
        grid.appendChild(card);
    }
};

const startTimerProgressivo = () => {
    loopProgressivo = setInterval(() => {
        timerProgressivo.innerHTML = startTimeProgressivo++;
    }, 1000);
};

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('Jogador');
    startTimerProgressivo();
    loadGame();
};

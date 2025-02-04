let parteAtual = 0;
const partes = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"
    , "img8" , "img9", "img10", "img11","img12"];
let soundAtual = 0;
const sound = ["som1_historia.ogg","som2_historia.ogg", "som3_historia.ogg","som4_historia.ogg","som5_historia.ogg","som6_historia.ogg","som7_historia.ogg","som8_historia.ogg","som9_historia.ogg","som10_historia.ogg","som11_historia.ogg","som12_historia.ogg"]

var audio = document.getElementById('myAudio');

function atualizarParte() {
    const body = document.body;
    body.className = partes[parteAtual];
	
}

function proximaParte() {
    if (parteAtual < partes.length - 1) {
        parteAtual++;
		soundAtual++
		audio.pause();
		audio.currentTime = 0;
        atualizarParte();
		atualizarSound();
    } else {
        window.location.href = 'quiz.html'; // Redireciona para a página do quiz
    }
}

function atualizarSound(){
	
	audio.src = 'audio/'+sound[soundAtual];
}

function proximoAudio(){
	
	if(soundAtual < soundAtual.length - 1){
		
		soundAtual++;
	}
}

function parteAnterior() {
    if (parteAtual > 0) {
        parteAtual--;
		audio.pause();
		audio.currentTime = 0;
        atualizarParte();
    }
}



// Função para reproduzir o áudio
function playAudio() {
    audio.play();
}

// Função para pausar o áudio
function pauseAudio() {
    audio.pause();
}

// Função para parar o áudio (pausar e redefinir para o início)
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

// Inicializa exibindo a primeira imagem


const input = document.querySelector('.entrar');
const button = document.querySelector('.button');
const form = document.querySelector('.login');

const validate = ({target}) => {
if(target.value.length > 3){
	button.removeAttribute('disabled')

	}else {
		button.setAttribute('disabled','');
	}	
}
const sub = (event) => {
    
    event.preventDefault();
    localStorage.setItem('Jogador', input.value)
    window.location = 'JOGO1.html';
}

input.addEventListener('input', validate);
form.addEventListener('submit', sub);

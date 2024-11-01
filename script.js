const contagem = document.getElementById('contagem');
const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const dataAlvo = new Date();
dataAlvo.setHours(19);
dataAlvo.setMinutes(0);
dataAlvo.setSeconds(0);

function atualizarContagem() {
	const agora = new Date();
	const diferenca = dataAlvo.getTime() - agora.getTime();

	const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
	const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
	const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

	diasElement.textContent = dias.toString().padStart(2, '0');
	horasElement.textContent = horas.toString().padStart(2, '0');
	minutosElement.textContent = minutos.toString().padStart(2, '0');
	segundosElement.textContent = segundos.toString().padStart(2, '0');

	if (diferenca <= 0) {
		contagem.textContent = 'Tempo expirado!';
	}
}

atualizarContagem();
setInterval(atualizarContagem, 1000);

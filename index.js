'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => {
    const div = document.getElementById(letra);
    div.classList.add('active');
}

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    div.classList.remove('active'); // Remova o efeito imediatamente
}

const ativarDiv = (evento) => {
    let letra = '';
    if (evento.type === 'click') {
        letra = evento.target.id; // Quando clicar, pega o id da div
    } else if (evento.type === 'keydown') {
        letra = evento.key.toUpperCase(); // Quando pressionar tecla, pega a tecla
    }

    const letraPermitida = sons.hasOwnProperty(letra); // Verifica se a letra está na lista
    if (letraPermitida) {
        removerEfeito(letra); // Remova o efeito antes de adicionar o novo
        adicionarEfeito(letra); // Adiciona o efeito de aumento
        tocarSom(letra); // Toca o som
        setTimeout(() => removerEfeito(letra), 200); // Remova o efeito após 200ms (tempo de duração do efeito)
    }
}

exibir(sons);

document.getElementById('container')
    .addEventListener('click', ativarDiv);
window.addEventListener('keydown', ativarDiv);

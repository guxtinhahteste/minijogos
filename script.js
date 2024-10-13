
// Jogo de Adivinhar o Número
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinheNumero() {
    const palpite = document.getElementById('numero-entrada').value;
    const resultado = document.getElementById('resultado-adivinhacao');

    if (palpite == numeroSecreto) {
        resultado.innerText = 'Parabéns! Você acertou!';
        resultado.style.color = 'green';
    } else if (palpite < numeroSecreto) {
        resultado.innerText = 'Tente um número maior!';
        resultado.style.color = 'blue';
    } else {
        resultado.innerText = 'Tente um número menor!';
        resultado.style.color = 'red';
    }
}

// Jogo de Clicar no Alvo
let tempoInicio;

function clicarAlvo() {
    const alvo = document.getElementById('alvo');
    const resultado = document.getElementById('resultado-clique');

    if (!tempoInicio) {
        tempoInicio = new Date().getTime();
        alvo.innerText = 'Clique novamente!';
    } else {
        const tempoFim = new Date().getTime();
        const tempoTotal = (tempoFim - tempoInicio) / 1000;
        resultado.innerText = 'Você clicou em ' + tempoTotal + ' segundos!';
        resultado.style.color = 'purple';
        alvo.innerText = 'Clique Aqui!';
        tempoInicio = null;
    }
}

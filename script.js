const premios = [
    '💵 $100',
    '💴 $500',
    '💶 $1.000',
    '💷 $5.000',
    '💸 $10.000',
    '💰 $50.000',
    '🏆 JACKPOT',
    '🎁 PRÊMIO',
    '⭐ ESPECIAL',
    '🎪 SORTE',
    '🌟 BONUS',
    '🎊 TOP!'
];

let girando = false;

function criarAudioDinheiro() {
    // Criar som de dinheiro usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;

    // Som 1: Som agudo de moeda
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.connect(gain1);
    gain1.connect(audioContext.destination);
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 0.1);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc1.start(now);
    osc1.stop(now + 0.1);

    // Som 2: Som médio
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    osc2.connect(gain2);
    gain2.connect(audioContext.destination);
    osc2.frequency.setValueAtTime(600, now + 0.15);
    osc2.frequency.exponentialRampToValueAtTime(400, now + 0.25);
    gain2.gain.setValueAtTime(0.3, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.25);

    // Som 3: Som grave de aprovação
    const osc3 = audioContext.createOscillator();
    const gain3 = audioContext.createGain();
    osc3.connect(gain3);
    gain3.connect(audioContext.destination);
    osc3.frequency.setValueAtTime(300, now + 0.3);
    osc3.frequency.exponentialRampToValueAtTime(200, now + 0.5);
    gain3.gain.setValueAtTime(0.3, now + 0.3);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc3.start(now + 0.3);
    osc3.stop(now + 0.5);
}

function girarRoleta() {
    if (girando) return;

    girando = true;
    const botao = document.getElementById('spinBtn');
    const resultado = document.getElementById('result');
    const wheel = document.getElementById('wheel');

    botao.disabled = true;
    resultado.textContent = 'Girando...';

    // Remove a animação anterior
    wheel.classList.remove('spin');
    // Trigger reflow para reiniciar a animação
    void wheel.offsetWidth;
    // Adiciona a animação de novo
    wheel.classList.add('spin');

    // Após 4 segundos (duração da animação), mostra o resultado
    setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * premios.length);
        const premiador = premios[indiceAleatorio];

        resultado.textContent = `🎉 ${premiador} 🎉`;

        // Toca o som de dinheiro
        try {
            criarAudioDinheiro();
        } catch (e) {
            console.log('Áudio não disponível');
        }

        // Efeito de vibração se disponível
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100, 50, 200]);
        }

        girando = false;
        botao.disabled = false;
    }, 4000);
}

// Permitir girar com Enter
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !girando) {
        girarRoleta();
    }
});
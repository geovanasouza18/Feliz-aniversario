document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('contentContainer').style.display = 'flex';
    this.style.display = 'none';

// Inicia os confetes com mais partículas e duração maior
confetti({
    particleCount: 600,
    spread: 250,
    origin: { y: 0.6 },
    decay: 0.9, // diminui a velocidade de desaparecimento dos confetes
    scalar: 1.6, // aumenta o tamanho dos confetes
});

// Adiciona um segundo disparo de confetes para um efeito prolongado
setTimeout(function() {
    confetti({
        particleCount: 600,
        spread: 250,
        origin: { y: 0.6 },
        decay: 0.9,
        scalar: 1.6,
    });
}, 1000); // Dispara novamente após 1 segundo
});

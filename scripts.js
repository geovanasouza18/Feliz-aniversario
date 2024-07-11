document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openButton');
    const contentContainer = document.getElementById('contentContainer');

    openButton.addEventListener('click', function() {
        contentContainer.style.display = 'flex'; // Mostra o conteúdo ao clicar no botão
        openButton.style.display = 'none'; // Esconde o botão após mostrar o conteúdo

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
});

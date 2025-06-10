document.addEventListener('DOMContentLoaded', () => {
    const iniciarJornadaBtn = document.getElementById('iniciarJornada');
    const introducaoSection = document.getElementById('introducao');
    const momentosSection = document.getElementById('momentos');
    const galeriaSurpresaSection = document.getElementById('galeria-surpresa');
    const mensagemDoceSection = document.getElementById('mensagem-doce');
    const futuroJuntosSection = document.getElementById('futuro-juntos');
    const coracaoPulsaBtn = document.getElementById('coracaoPulsa');
    const choverAmorBtn = document.getElementById('choverAmor');

    // Função para mostrar seções com um pequeno atraso
    const showSection = (section, delay) => {
        setTimeout(() => {
            section.classList.remove('hidden');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, delay);
    };

    // Iniciar a jornada
    iniciarJornadaBtn.addEventListener('click', () => {
        introducaoSection.classList.add('hidden'); // Esconde a introdução
        showSection(momentosSection, 500); // Mostra "Nossos Momentos"
        showSection(galeriaSurpresaSection, 2000); // Mostra a galeria depois
        showSection(mensagemDoceSection, 4000); // Mostra a mensagem
        showSection(futuroJuntosSection, 7000); // Mostra o futuro
    });

    // Animação do coração pulsando (para o botão "Sinta Meu Coração Pulsar!")
    coracaoPulsaBtn.addEventListener('click', () => {
        coracaoPulsaBtn.style.transform = 'scale(1.2)';
        coracaoPulsaBtn.style.backgroundColor = '#d81b60';
        setTimeout(() => {
            coracaoPulsaBtn.style.transform = 'scale(1)';
            coracaoPulsaBtn.style.backgroundColor = '#ff4081';
        }, 300);

        // Adicione um efeito visual no centro da tela, como um coração crescendo
        const pulsingHeart = document.createElement('div');
        pulsingHeart.innerHTML = '💓';
        pulsingHeart.style.position = 'fixed';
        pulsingHeart.style.fontSize = '80px';
        pulsingHeart.style.top = '50%';
        pulsingHeart.style.left = '50%';
        pulsingHeart.style.transform = 'translate(-50%, -50%)';
        pulsingHeart.style.zIndex = '1000';
        pulsingHeart.style.pointerEvents = '0,1';
        document.body.appendChild(pulsingHeart);

        let size = 0;
        const growInterval = setInterval(() => {
            size += 5;
            pulsingHeart.style.fontSize = `${size}px`;
            pulsingHeart.style.opacity = (200 - size) / 200; // Fade out
            if (size >= 200) {
                clearInterval(growInterval);
                pulsingHeart.remove();
            }
        }, 20);
    });

    // Chuva de corações
    choverAmorBtn.addEventListener('click', () => {
        const createHeart = () => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3 a 5 segundos
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, parseFloat(heart.style.animationDuration) * 1000);
        };

        let heartCount = 0;
        const heartInterval = setInterval(() => {
            createHeart();
            heartCount++;
            if (heartCount > 50) { // Limite de corações para não sobrecarregar
                clearInterval(heartInterval);
            }
        }, 100);
    });
});
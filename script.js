function startHearts() {
    const heartsContainer = document.getElementById('hearts-container');

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * -20 + 'vh';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';

        heartsContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

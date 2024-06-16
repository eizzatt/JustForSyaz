document.addEventListener("DOMContentLoaded", () => {
    const cakeContainer = document.getElementById('cake-container');
    const numberOfCakes = 15; // Number of cakes to animate
    const emoji = '🍰';

    function createCake() {
        const cake = document.createElement('div');
        cake.classList.add('cake');
        cake.innerText = emoji;
        cakeContainer.appendChild(cake);
        randomizePosition(cake);
    }

    function randomizePosition(cake) {
        const randomX = Math.random() * (window.innerWidth - 50); // Calculate random X position within the viewport width
        const randomDelay = Math.random() * 5; // Random delay to stagger animations
        cake.style.left = `${randomX}px`; // Apply random X position
        cake.style.animationDelay = `${randomDelay}s`; // Apply random delay
        cake.classList.add('falling'); // Add the animation class to start the fall
    }

    for (let i = 0; i < numberOfCakes; i++) {
        createCake();
    }
});
